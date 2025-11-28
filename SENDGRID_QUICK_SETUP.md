# SendGrid Quick Setup Guide

## 🚀 Quick Start (5 minutes)

### Step 1: Sign Up for SendGrid
1. Go to https://sendgrid.com/free/
2. Click "Start for Free"
3. Fill in your details and verify your email

### Step 2: Create API Key
1. Log in to SendGrid dashboard
2. Click **Settings** (left sidebar) > **API Keys**
3. Click **Create API Key** (top right)
4. Enter name: `APA Maritime Contact Form`
5. Select **Restricted Access**
6. Scroll down and enable **Mail Send** > **Mail Send** (toggle to ON)
7. Click **Create & View**
8. **IMPORTANT**: Copy the API key immediately (starts with `SG.`)
   - You won't be able to see it again!
   - It should look like: `SG.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

### Step 3: Verify Sender Email
1. Go to **Settings** > **Sender Authentication**
2. Click **Verify a Single Sender**
3. Fill in the form:
   - **From Name**: APA Maritime
   - **From Email Address**: noreply@apamaritime.com (or any email you have access to)
   - **Reply To**: commercial@apamaritime.com
   - **Company Address**: Your company address
4. Click **Create**
5. Check your email inbox for verification email
6. Click the verification link

### Step 4: Configure Your Project
1. Create a `.env` file in your project root:
   ```bash
   # On Windows (PowerShell)
   Copy-Item .env.example .env
   
   # On Mac/Linux
   cp .env.example .env
   ```

2. Open `.env` and add your credentials:
   ```env
   SENDGRID_API_KEY=SG.your-actual-api-key-here
   SENDGRID_FROM_EMAIL=noreply@apamaritime.com
   ```

3. Save the file

### Step 5: Test It!
1. Restart your dev server:
   ```bash
   npm run dev
   ```

2. Go to http://localhost:4321/contact

3. Fill out the form and click "Send Message"

4. Watch the paper airplane animation! ✈️

5. Check commercial@apamaritime.com for the email

## ✅ What You Get

- ✅ 100 free emails per day
- ✅ Professional email delivery
- ✅ Email analytics in SendGrid dashboard
- ✅ No email client popup
- ✅ Beautiful HTML emails with your branding

## 🔒 Security Notes

- Never commit your `.env` file to Git (it's already in `.gitignore`)
- Keep your API key secret
- For production, set environment variables in your hosting platform

## 📊 Monitoring

Check your SendGrid dashboard to see:
- Emails sent
- Delivery rate
- Bounces and spam reports
- Click and open rates (if you enable tracking)

## 🆘 Need Help?

See the full guide: [EMAIL_SETUP.md](./EMAIL_SETUP.md)

## 🎉 That's It!

Your contact form is now ready to send emails directly to commercial@apamaritime.com using SendGrid!

