# Deployment Checklist

Use this checklist to ensure everything is set up correctly before deploying to GitHub Pages.

## Pre-Deployment Checklist

### Files
- [ ] All images are in the `images/` folder
- [ ] Image filenames match exactly in HTML (case-sensitive)
- [ ] `index.html` is in the root directory
- [ ] `.gitignore` is configured

### Form Configuration
- [ ] Formspree account created
- [ ] Formspree form created and Form ID copied
- [ ] Form action URL updated in `index.html`
- [ ] Redirect URL updated with your GitHub username
- [ ] Form tested locally (check form structure)

### Code Updates
- [ ] All placeholder text replaced
- [ ] All links tested
- [ ] No broken image references
- [ ] JavaScript console shows no errors

## GitHub Setup

### Repository
- [ ] GitHub repository created
- [ ] Repository is set to Public
- [ ] Git initialized locally
- [ ] All files committed
- [ ] Code pushed to GitHub

### GitHub Pages
- [ ] GitHub Pages enabled in Settings
- [ ] Source branch set to `main`
- [ ] Source folder set to `/ (root)`
- [ ] Site URL noted: `https://YOUR_USERNAME.github.io/carousel/`

## Post-Deployment

### Testing
- [ ] Website loads at GitHub Pages URL
- [ ] All images display correctly
- [ ] Carousel works (auto-advance and manual controls)
- [ ] All links work (download links, external links)
- [ ] Form submission works
- [ ] Success message displays after form submission
- [ ] Mobile responsive design works
- [ ] No console errors

### Final Steps
- [ ] Update Formspree redirect URL with actual GitHub Pages URL
- [ ] Test form submission end-to-end
- [ ] Share your website URL!

## Quick Git Commands Reference

```bash
# Initial setup
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/carousel.git
git branch -M main
git push -u origin main

# Making updates
git add .
git commit -m "Description of changes"
git push

# Check status
git status

# View recent commits
git log --oneline
```

## Troubleshooting

**If images don't show:**
- Check file names match exactly (case-sensitive)
- Verify images are committed: `git ls-files images/`
- Check image paths in HTML

**If form doesn't work:**
- Verify Formspree Form ID is correct
- Check redirect URL matches your GitHub Pages URL
- Test form in Formspree dashboard

**If site doesn't update:**
- Wait 1-2 minutes for GitHub Pages to rebuild
- Check repository Settings > Pages for build status
- Clear browser cache

