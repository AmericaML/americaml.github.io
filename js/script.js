// GB Studio Guide Website JavaScript
// Carousel and Form Handling

$(document).ready(function() {
  // Initialize carousel properly
  $('#myCarousel').carousel({
    interval: 5000,
    pause: 'hover',
    wrap: true
  });
  
  // Prevent image loading issues
  $('#myCarousel img').on('load', function() {
    $(this).css('opacity', '1');
  }).each(function() {
    if (this.complete) {
      $(this).trigger('load');
    }
  });
  
  // Fix carousel slide transitions
  $('#myCarousel').on('slide.bs.carousel', function(e) {
    var $next = $(e.relatedTarget);
    var $items = $('.item', this);
    $items.removeClass('active');
    $next.addClass('active');
  });
  
  // Handle form messages from URL parameters
  var urlParams = new URLSearchParams(window.location.search);
  var status = urlParams.get('status');
  var message = urlParams.get('message');
  var formMessage = $('#form-message');
  
  if (status === 'success') {
    formMessage.removeClass('error').addClass('success');
    formMessage.text('Thank you! Your message has been sent successfully. We will get back to you soon.');
    formMessage.show();
    
    // Clear form
    $('#contact-form')[0].reset();
    
    // Scroll to message
    $('html, body').animate({
      scrollTop: formMessage.offset().top - 100
    }, 500);
    
    // Remove status from URL
    window.history.replaceState({}, document.title, window.location.pathname);
  } else if (status === 'error') {
    formMessage.removeClass('success').addClass('error');
    formMessage.text(message || 'Sorry, there was an error sending your message. Please try again.');
    formMessage.show();
    
    // Scroll to message
    $('html, body').animate({
      scrollTop: formMessage.offset().top - 100
    }, 500);
  }
});

