# GitHub Pages Quick Start Guide

## ✅ What Works on GitHub Pages

- ✅ **HTML, CSS, JavaScript** - All work perfectly
- ✅ **Images** - Will work as long as they're in your repository
- ✅ **Formspree Contact Form** - Already configured in `index.html`
- ❌ **PHP files** - `contact.php` will NOT work (GitHub Pages doesn't support PHP)

## 🚨 Important: About contact.php

The `contact.php` file you updated is for **PHP servers only** (like traditional web hosting). 

**For GitHub Pages, you need to use Formspree instead** (which is already set up in `index.html`).

## 📝 What You Need to Do

### 1. Set Up Formspree (2 minutes)

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Click **"New Form"**
3. Name it "GB Studio Contact" (or any name)
4. Copy your **Form ID** (looks like: `xvgkqjpn` or `abc123xyz`)

### 2. Update index.html

Open `index.html` and find line 592:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" id="contact-form">
```

Replace `YOUR_FORM_ID` with your actual Formspree Form ID:
```html
<form action="https://formspree.io/f/xvgkqjpn" method="POST" id="contact-form">
```

### 3. Update Your GitHub Username

Find line 593 in `index.html`:
```html
<input type="hidden" name="_next" value="https://YOUR_USERNAME.github.io/carousel/?status=success">
```

Replace `YOUR_USERNAME` with your actual GitHub username:
```html
<input type="hidden" name="_next" value="https://cybercodetwins.github.io/carousel/?status=success">
```

### 4. Verify Images Are Ready

All images should be in the `images/` folder:
- ✅ `gb_studio_music.png`
- ✅ `gb_studio_image1.png`
- ✅ `gb_studio_image2.png`
- ✅ `gb_studio_image3.png`
- ✅ `gb_studio_program.png`
- ✅ `sprinter_resource_page.png`
- ✅ `pure_ref.png`

**Images will work automatically** on GitHub Pages as long as they're committed to your repository.

### 5. Push to GitHub

```bash
cd /Users/cybercodetwins/Desktop/carousel
git add .
git commit -m "Update form configuration for GitHub Pages"
git push
```

### 6. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**

Your site will be live at: `https://YOUR_USERNAME.github.io/carousel/`

## 🎯 Summary

- **contact.php**: Ignore this file for GitHub Pages (it's for PHP servers)
- **index.html**: Already configured for Formspree - just add your Form ID
- **Images**: Will work automatically if they're in the repository
- **Form**: Set up Formspree and update the Form ID in index.html

## ✅ Final Checklist

- [ ] Formspree account created
- [ ] Formspree Form ID copied
- [ ] Form ID updated in index.html (line 592)
- [ ] GitHub username updated in index.html (line 593)
- [ ] All images are in the `images/` folder
- [ ] Code pushed to GitHub
- [ ] GitHub Pages enabled in repository settings
- [ ] Tested form submission

That's it! Your site will work perfectly on GitHub Pages. 🚀

