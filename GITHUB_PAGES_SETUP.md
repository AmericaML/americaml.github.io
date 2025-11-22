# GitHub Pages Setup Guide

This guide will help you deploy your GB Studio website to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your computer
- Your project files ready

## Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **+** icon in the top right corner
3. Select **New repository**
4. Name your repository: `carousel` (or any name you prefer)
5. Make it **Public** (required for free GitHub Pages)
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click **Create repository**

## Step 2: Initialize Git and Push Your Code

Open your terminal/command prompt and navigate to your project folder:

```bash
cd /Users/cybercodetwins/Desktop/carousel
```

Then run these commands:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create your first commit
git commit -m "Initial commit: GB Studio website"

# Add your GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/carousel.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Configure Formspree for Contact Form

Since GitHub Pages doesn't support PHP, we're using Formspree:

1. Go to [Formspree.io](https://formspree.io) and sign up (free account available)
2. Click **New Form**
3. Give it a name like "GB Studio Contact"
4. Copy your **Form ID** (looks like: `xvgkqjpn`)
5. Open `index.html` in your editor
6. Find this line:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" id="contact-form">
   ```
7. Replace `YOUR_FORM_ID` with your actual Formspree Form ID
8. Find this line:
   ```html
   <input type="hidden" name="_next" value="https://YOUR_USERNAME.github.io/carousel/?status=success">
   ```
9. Replace `YOUR_USERNAME` with your GitHub username
10. Save the file

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select **Deploy from a branch**
5. Select **main** branch
6. Select **/ (root)** folder
7. Click **Save**
8. Wait a few minutes for GitHub to build your site

## Step 5: Access Your Website

Your website will be available at:
```
https://YOUR_USERNAME.github.io/carousel/
```

Replace `YOUR_USERNAME` with your actual GitHub username.

**Note:** It may take a few minutes for the site to be live after enabling Pages.

## Step 6: Update Formspree Redirect URL

After your site is live, update the Formspree redirect URL in `index.html`:

1. Open `index.html`
2. Find the line with `_next`:
   ```html
   <input type="hidden" name="_next" value="https://YOUR_USERNAME.github.io/carousel/?status=success">
   ```
3. Make sure `YOUR_USERNAME` matches your GitHub username
4. Commit and push the changes:
   ```bash
   git add index.html
   git commit -m "Update Formspree redirect URL"
   git push
   ```

## Updating Your Website

Whenever you make changes:

```bash
# Add changed files
git add .

# Commit changes
git commit -m "Description of your changes"

# Push to GitHub
git push
```

GitHub Pages will automatically update your site (usually within 1-2 minutes).

## Custom Domain (Optional)

If you have a custom domain:

1. Go to repository **Settings** > **Pages**
2. Enter your domain in the **Custom domain** field
3. Add a `CNAME` file to your repository root with your domain name
4. Configure DNS records with your domain provider

## Troubleshooting

**Site not loading?**
- Wait 5-10 minutes after enabling Pages
- Check repository Settings > Pages to ensure it's enabled
- Verify your branch is `main` and folder is `/ (root)`

**Form not working?**
- Verify Formspree Form ID is correct
- Check that Formspree form is active
- Verify redirect URL matches your GitHub Pages URL

**Images not showing?**
- Ensure all images are in the `images/` folder
- Check image file names match exactly (case-sensitive)
- Verify images are committed to the repository

## Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Formspree Documentation](https://help.formspree.io/)
- [Git Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)

