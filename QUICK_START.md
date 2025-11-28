# Quick Start - Deployment Summary

## 🎯 What We've Done

Your APA Maritime website is now split into two parts:

1. **Static Website** → Deploy to Hostinger
2. **Contact Form API** → Deploy to Vercel (free)

## 📦 What You Have

```
apa-maritime/
├── dist/                    # ← Upload this to Hostinger
│   ├── index.html
│   ├── contact/
│   ├── _astro/
│   └── ... (all static files)
│
├── api-vercel/              # ← Deploy this to Vercel
│   ├── api/
│   │   └── contact.js       # Contact form API
│   ├── package.json
│   ├── vercel.json
│   └── README.md
│
└── src/                     # Your source code
```

## 🚀 Deployment Steps (In Order)

### 1️⃣ Deploy API to Vercel (5 minutes)

```bash
# Install Vercel CLI
npm install -g vercel

# Go to API folder
cd api-vercel

# Install dependencies
npm install

# Login to Vercel
vercel login

# Deploy
vercel

# After deployment, add environment variables in Vercel Dashboard:
# - SENDGRID_API_KEY
# - SENDGRID_FROM_EMAIL

# Deploy to production
vercel --prod
```

**You'll get a URL like**: `https://apa-maritime-api.vercel.app`

### 2️⃣ Update Website with API URL

Edit `src/pages/contact.astro` (line ~265):

```javascript
// Change this:
const apiUrl = 'YOUR_VERCEL_API_URL_HERE/api/contact';

// To this (use your actual Vercel URL):
const apiUrl = 'https://apa-maritime-api.vercel.app/api/contact';
```

### 3️⃣ Build Website

```bash
# Go back to main folder
cd ..

# Build
npm run build
```

### 4️⃣ Upload to Hostinger

1. Log in to Hostinger
2. Go to File Manager
3. Navigate to `public_html`
4. Delete old files (backup first!)
5. Upload everything from `dist/` folder

## ✅ Test Everything

1. Visit your website
2. Go to Contact page
3. Fill out and submit the form
4. Check email at `commercial@apamaritime.com`

## 📚 Full Documentation

- **Detailed Guide**: See `DEPLOYMENT_GUIDE.md`
- **API Setup**: See `api-vercel/README.md`

## 🆘 Common Issues

### Contact form not working?
- Check the API URL in `contact.astro` is correct
- Verify environment variables in Vercel Dashboard
- Check Vercel logs for errors

### SendGrid 403 error?
- Verify your sender email in SendGrid Dashboard
- Go to: Settings > Sender Authentication

### Images not loading?
- Make sure you uploaded the entire `dist/` folder
- Check file permissions on Hostinger

## 🔄 Making Updates

**Website changes:**
```bash
npm run build
# Upload new dist/ folder to Hostinger
```

**API changes:**
```bash
cd api-vercel
vercel --prod
```

## 📞 Need Help?

Check the full `DEPLOYMENT_GUIDE.md` for detailed troubleshooting steps.

