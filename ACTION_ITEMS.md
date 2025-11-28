# 📋 Action Items - What You Need to Do

## ✅ What's Already Done

- ✅ Website converted to static build (works with Hostinger)
- ✅ Contact form API created as Vercel serverless function
- ✅ Build tested and working
- ✅ All documentation created

## 🎯 What You Need to Do Now

### Step 1: Deploy API to Vercel (MUST DO FIRST!)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to API folder
cd api-vercel

# Install dependencies
npm install

# Login to Vercel (opens browser)
vercel login

# Deploy (follow prompts)
vercel
```

**Important**: After deployment, you'll get a URL like:
```
https://apa-maritime-api-xxxxx.vercel.app
```

**SAVE THIS URL!** You'll need it in the next step.

### Step 2: Add Environment Variables to Vercel

1. Go to https://vercel.com/dashboard
2. Click on your project (apa-maritime-api)
3. Go to **Settings** → **Environment Variables**
4. Add these two variables:
   - **SENDGRID_API_KEY**: `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`
   - **SENDGRID_FROM_EMAIL**: `sandarbh88@gmail.com`
5. Click **Save**

### Step 3: Deploy to Production

```bash
# Still in api-vercel folder
vercel --prod
```

This redeploys with your environment variables.

### Step 4: Verify SendGrid Sender Email

**CRITICAL**: Your sender email MUST be verified in SendGrid!

1. Go to https://app.sendgrid.com/
2. Navigate to **Settings** → **Sender Authentication**
3. Click **Verify a Single Sender**
4. Fill in the form:
   - **From Name**: APA Maritime
   - **From Email**: sandarbh88@gmail.com
   - **Reply To**: sandarbh88@gmail.com
   - Fill in your company address details
5. Click **Create**
6. Check your email inbox (sandarbh88@gmail.com)
7. Click the verification link
8. Wait for confirmation

### Step 5: Update Website with API URL

1. Open `src/pages/contact.astro`
2. Find line ~265 (search for "YOUR_VERCEL_API_URL_HERE")
3. Replace this:
   ```javascript
   const apiUrl = 'YOUR_VERCEL_API_URL_HERE/api/contact';
   ```
   
   With your actual Vercel URL:
   ```javascript
   const apiUrl = 'https://apa-maritime-api-xxxxx.vercel.app/api/contact';
   ```

### Step 6: Build Website

```bash
# Go back to main project folder
cd ..

# Build the website
npm run build
```

This creates a `dist/` folder with all your static files.

### Step 7: Upload to Hostinger

1. Log in to Hostinger: https://hpanel.hostinger.com/
2. Go to **Hosting** → **File Manager**
3. Navigate to `public_html` (or your domain's root folder)
4. **Backup existing files** (download them first!)
5. Delete all files in `public_html`
6. Upload **ALL** files from the `dist/` folder
7. Make sure the structure looks like:
   ```
   public_html/
   ├── index.html
   ├── about/
   ├── contact/
   ├── _astro/
   ├── images/
   └── ...
   ```

### Step 8: Test Everything!

1. Visit your website: `https://yourdomain.com`
2. Navigate to the Contact page
3. Fill out the contact form with test data
4. Submit the form
5. You should see:
   - Paper airplane animation
   - "Sending..." text
   - "Sent!" confirmation
   - Thank you modal
6. Check email at `commercial@apamaritime.com`

## 🚨 Troubleshooting

### If contact form doesn't work:

1. **Check browser console** (F12 → Console tab)
2. **Test API directly**:
   ```bash
   curl -X POST https://YOUR-VERCEL-URL.vercel.app/api/contact \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@test.com","phone":"+1234567890","subject":"Test","message":"Test"}'
   ```
3. **Check Vercel logs**: https://vercel.com/dashboard → Your Project → Logs
4. **Verify environment variables**: Vercel Dashboard → Settings → Environment Variables

### If you get SendGrid 403 error:

- Your sender email is NOT verified
- Go back to Step 4 and verify it

### If images don't load:

- Make sure you uploaded the entire `dist/` folder contents
- Check that `images/` folder exists in `public_html`

## 📚 Documentation

- **Quick Start**: `QUICK_START.md`
- **Full Deployment Guide**: `DEPLOYMENT_GUIDE.md`
- **API Documentation**: `api-vercel/README.md`

## 🎉 Once Everything Works

Your setup will be:
- ✅ Static website on Hostinger (fast, cheap)
- ✅ API on Vercel (free tier, 100GB bandwidth/month)
- ✅ Emails via SendGrid (free tier, 100 emails/day)

## 🔄 Future Updates

**To update website**:
```bash
# Make changes
npm run build
# Upload new dist/ folder to Hostinger
```

**To update API**:
```bash
cd api-vercel
# Make changes to api/contact.js
vercel --prod
```

---

## ⏱️ Estimated Time

- Step 1-3: Deploy API → **5 minutes**
- Step 4: Verify SendGrid → **5 minutes**
- Step 5-6: Update & Build → **2 minutes**
- Step 7: Upload to Hostinger → **5 minutes**
- Step 8: Testing → **5 minutes**

**Total: ~20-25 minutes**

---

Good luck! 🚀

