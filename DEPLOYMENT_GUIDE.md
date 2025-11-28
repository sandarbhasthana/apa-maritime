# APA Maritime - Deployment Guide

This guide explains how to deploy your APA Maritime website to Hostinger (static site) and the contact form API to Vercel (serverless function).

## Architecture Overview

- **Main Website**: Static HTML/CSS/JS hosted on Hostinger
- **Contact Form API**: Serverless function hosted on Vercel (free tier)
- **Email Service**: SendGrid for sending emails

---

## Part 1: Deploy API to Vercel (Do This First!)

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Navigate to API folder

```bash
cd api-vercel
```

### Step 3: Install dependencies

```bash
npm install
```

### Step 4: Login to Vercel

```bash
vercel login
```

Follow the prompts to authenticate.

### Step 5: Deploy to Vercel

```bash
vercel
```

Follow the prompts:
- **Set up and deploy?** Y
- **Which scope?** Select your account
- **Link to existing project?** N
- **Project name?** apa-maritime-api (or your preferred name)
- **In which directory is your code located?** ./ (current directory)
- **Want to override the settings?** N

Vercel will deploy and give you a URL like:
```
https://apa-maritime-api.vercel.app
```

### Step 6: Add Environment Variables to Vercel

Go to your Vercel dashboard: https://vercel.com/dashboard

1. Select your project (apa-maritime-api)
2. Go to **Settings** > **Environment Variables**
3. Add the following variables:
   - **Name**: `SENDGRID_API_KEY`
     **Value**: Your SendGrid API key (starts with SG.)
   - **Name**: `SENDGRID_FROM_EMAIL`
     **Value**: `sandarbh88@gmail.com` (or your verified sender email)
4. Click **Save**

### Step 7: Redeploy with Environment Variables

```bash
vercel --prod
```

This deploys to production with your environment variables.

### Step 8: Test Your API

Test the API endpoint:

```bash
curl -X POST https://YOUR-VERCEL-URL.vercel.app/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+1234567890",
    "subject": "Test Subject",
    "message": "This is a test message"
  }'
```

You should get a success response and receive an email at commercial@apamaritime.com

---

## Part 2: Update Website with API URL

### Step 1: Update Contact Form

Open `src/pages/contact.astro` and find this line (around line 265):

```javascript
const apiUrl = 'YOUR_VERCEL_API_URL_HERE/api/contact';
```

Replace it with your actual Vercel URL:

```javascript
const apiUrl = 'https://apa-maritime-api.vercel.app/api/contact';
```

### Step 2: Build the Website

```bash
cd ..  # Go back to main project folder
npm run build
```

This creates a `dist/` folder with all your static files.

---

## Part 3: Deploy Website to Hostinger

### Step 1: Access Hostinger File Manager

1. Log in to your Hostinger account
2. Go to **Hosting** > **File Manager**
3. Navigate to `public_html` folder (or your domain's root folder)

### Step 2: Upload Files

1. Delete all existing files in `public_html` (backup first if needed!)
2. Upload ALL files from your `dist/` folder to `public_html`
3. Make sure the structure looks like:
   ```
   public_html/
   ├── index.html
   ├── about/
   │   └── index.html
   ├── contact/
   │   └── index.html
   ├── _astro/
   │   ├── (CSS and JS files)
   ├── images/
   │   └── (all images)
   └── ... (other folders)
   ```

### Step 3: Configure .htaccess (Optional but Recommended)

Create a `.htaccess` file in `public_html` with the following content:

```apache
# Enable GZIP compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Browser caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>

# Custom 404 page
ErrorDocument 404 /404.html
```

---

## Part 4: Verify Everything Works

### Test Checklist:

1. ✅ Visit your website: `https://yourdomain.com`
2. ✅ Navigate to all pages (About, Services, Contact, etc.)
3. ✅ Check that images load correctly
4. ✅ Go to Contact page
5. ✅ Fill out the contact form with test data
6. ✅ Submit the form
7. ✅ Verify you see the "Thank You" modal
8. ✅ Check that email arrives at `commercial@apamaritime.com`

---

## Troubleshooting

### Contact Form Not Working

**Issue**: Form submission fails or shows error

**Solutions**:
1. Check browser console for errors (F12 > Console)
2. Verify the API URL in `contact.astro` is correct
3. Test the Vercel API directly using curl (see Part 1, Step 8)
4. Check Vercel logs: https://vercel.com/dashboard > Your Project > Logs

### SendGrid 403 Error

**Issue**: Email not sending, 403 Forbidden error

**Solution**:
- Your sender email is not verified in SendGrid
- Go to SendGrid Dashboard > Settings > Sender Authentication
- Verify your sender email (`sandarbh88@gmail.com`)

### Images Not Loading

**Issue**: Images show broken or don't load

**Solution**:
- Make sure you uploaded the entire `dist/` folder contents
- Check that the `images/` folder exists in `public_html`
- Verify file permissions (should be 644 for files, 755 for folders)

### 404 Errors on Page Refresh

**Issue**: Pages work when clicking links, but show 404 when refreshing

**Solution**:
- This shouldn't happen with static builds
- Make sure all `index.html` files are in their respective folders
- Check `.htaccess` configuration

---

## Future Updates

When you make changes to your website:

### For Website Changes:

```bash
# 1. Make your changes
# 2. Build
npm run build

# 3. Upload new dist/ folder to Hostinger
```

### For API Changes:

```bash
cd api-vercel

# Make your changes to api/contact.js

# Deploy
vercel --prod
```

---

## Support

For issues or questions:
- Check Vercel logs: https://vercel.com/dashboard
- Check SendGrid activity: https://app.sendgrid.com/email_activity
- Contact your development team

---

## Quick Reference

**Vercel Dashboard**: https://vercel.com/dashboard
**SendGrid Dashboard**: https://app.sendgrid.com/
**Hostinger Panel**: https://hpanel.hostinger.com/

**API Endpoint**: `https://YOUR-VERCEL-URL.vercel.app/api/contact`
**Website**: `https://yourdomain.com`

