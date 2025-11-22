# GB Studio Game Development Guide

A beautiful, interactive website that provides a step-by-step guide for creating retro Game Boy games using GB Studio. This single-page application features an image carousel, detailed instructions, and a contact form.

## 🎮 Features

- **Interactive Image Carousel**: Browse through 7 different GB Studio tools and resources with clickable images that link to download pages
- **Step-by-Step Guide**: Clear, numbered instructions for getting started with GB Studio game development
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern UI/UX**: Beautiful gradient background, smooth animations, and polished styling
- **Contact Form**: Integrated contact form for users to reach out with questions

## 📋 Table of Contents

- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Project Structure](#-project-structure)
- [Quick Start - GitHub Pages](#-quick-start---github-pages)
- [Setup Instructions](#-setup-instructions)
- [Usage](#-usage)
- [Customization](#-customization)
- [Browser Support](#-browser-support)

## 🛠 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with animations and gradients
- **JavaScript/jQuery**: Interactive carousel functionality
- **Bootstrap 3.4.1**: Responsive grid system and carousel component
- **Google Fonts (Poppins)**: Typography
- **Formspree**: Contact form integration (for GitHub Pages)

## 📁 Project Structure

```
carousel/
├── index.html          # Main HTML file
├── images/            # Image assets directory
│   ├── gb_studio_music.png
│   ├── gb_studio_image1.png
│   ├── gb_studio_image2.png
│   ├── gb_studio_image3.png
│   ├── gb_studio_program.png
│   ├── sprinter_resource_page.png
│   └── pure_ref.png
└── README.md          # This file
```

## 🚀 Quick Start - GitHub Pages

**Deploy to GitHub Pages in minutes!**

1. **Create a GitHub repository** and push your code
2. **Enable GitHub Pages** in repository Settings > Pages
3. **Set up Formspree** for the contact form (see [GITHUB_PAGES_SETUP.md](GITHUB_PAGES_SETUP.md))
4. **Update Formspree Form ID** in `index.html`
5. Your site will be live at `https://YOUR_USERNAME.github.io/carousel/`

📖 **Detailed instructions:** See [GITHUB_PAGES_SETUP.md](GITHUB_PAGES_SETUP.md) for step-by-step guide.

## 🚀 Setup Instructions (Local Development)

1. **Clone or Download** the project to your local machine

2. **Ensure all images are present** in the `images/` directory:
   - `gb_studio_music.png`
   - `gb_studio_image1.png`
   - `gb_studio_image2.png`
   - `gb_studio_image3.png`
   - `gb_studio_program.png`
   - `sprinter_resource_page.png`
   - `pure_ref.png`

3. **Open the website**:
   - Simply open `index.html` in a web browser
   - Or serve it using a local web server (recommended):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (with http-server)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```

4. **Access the website**:
   - Navigate to `http://localhost:8000` in your browser

## 💻 Usage

### Carousel Navigation

- **Automatic**: The carousel automatically advances every 5 seconds
- **Manual Controls**: Use the left/right arrow buttons to navigate
- **Indicators**: Click the dots at the bottom to jump to specific slides
- **Clickable Images**: Click on any carousel image to visit the download page for that program

### Step-by-Step Guide

The website includes 6 detailed steps:

1. **Download GB Studio** - Get the main game development software
2. **Download GB Studio Game Palettes** - Get authentic Game Boy color palettes
3. **Download LibreSprite** - Install the pixel art editor
4. **Use Sprinter's Resource for Tileset** - Access pre-made game assets
5. **Use PureRef to Track Resources** - Organize your project assets
6. **Build Your Game: Skeleton, Alpha, then Beta** - Development workflow

### Contact Form

Users can fill out the contact form to:
- Ask questions about GB Studio
- Get help with their projects
- Request additional resources

## 🎨 Customization

### Changing Colors

The main gradient colors can be modified in the CSS:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Updating Carousel Images

1. Replace images in the `images/` directory
2. Update the `src` attributes in the HTML:
   ```html
   <img src="images/your-image.png" alt="Description">
   ```

### Modifying Steps

Edit the step items in the HTML:

```html
<div class="step-item">
  <div class="step-number">1</div>
  <div class="step-content">
    <div class="step-title">Your Step Title</div>
    <div class="step-description">Your step description</div>
  </div>
</div>
```

### Updating Download Links

Modify the `href` attributes in the carousel image links:

```html
<a href="https://your-download-link.com" target="_blank" rel="noopener noreferrer">
```

### Contact Form Configuration

The contact form uses Formspree (for GitHub Pages compatibility). To configure:

1. Sign up at [Formspree](https://formspree.io) (free account available)
2. Create a new form and copy your Form ID
3. Update the form action URL in `index.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. Replace `YOUR_FORM_ID` with your actual Formspree Form ID
5. Update the redirect URL (replace `YOUR_USERNAME` with your GitHub username):
   ```html
   <input type="hidden" name="_next" value="https://YOUR_USERNAME.github.io/carousel/?status=success">
   ```

**Note:** For local PHP development, see `contact.php` and `PHP_FORM_SETUP.md`

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

## 📧 Contact

For questions or support, use the contact form on the website.

## 🙏 Acknowledgments

- **GB Studio**: [gbstudio.dev](https://www.gbstudio.dev/)
- **Sprinter's Resource**: [spriters-resource.com](https://www.spriters-resource.com/)
- **PureRef**: [pureref.com](https://www.pureref.com/)
- **LibreSprite**: Open-source pixel art editor
- **Bootstrap**: Front-end framework
- **FormBold**: Form handling service

---

**Made with ❤️ for the GB Studio community**

