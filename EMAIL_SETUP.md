# Email Setup Guide for Contact Form

The contact form is now configured to send emails directly to **commercial@apamaritime.com** using **SendGrid** without opening the email client dialog.

## Features ✨

- ✅ Paper airplane animation inside button when sending
- ✅ Thank you modal with success message
- ✅ Direct email sending via SendGrid (no email client popup)
- ✅ Professional HTML email template
- ✅ Form validation
- ✅ International phone number support
- ✅ 100 free emails per day with SendGrid

## Setup Instructions

### Using SendGrid (Recommended)

1. **Sign up for SendGrid**:

   - Go to https://sendgrid.com
   - Create a free account (100 emails/day free)

2. **Create API Key**:

   - Log in to SendGrid dashboard
   - Go to **Settings** > **API Keys**
   - Click **Create API Key**
   - Name it (e.g., "APA Maritime Contact Form")
   - Select **Restricted Access** and enable **Mail Send** permission
   - Click **Create & View**
   - **Copy the API key** (you won't be able to see it again!)

3. **Verify Sender Email**:

   - Go to **Settings** > **Sender Authentication**
   - Click **Verify a Single Sender**
   - Add your email (e.g., noreply@apamaritime.com or your domain email)
   - Check your email and click the verification link
   - This email will be used as the "From" address

4. **Create `.env` file** in the root directory:

   ```bash
   cp .env.example .env
   ```

5. **Update `.env` file**:

   ```env
   SENDGRID_API_KEY=SG.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   SENDGRID_FROM_EMAIL=noreply@apamaritime.com
   ```

   Replace with your actual API key and verified sender email.

6. **Restart the dev server**:
   ```bash
   npm run dev
   ```

### Alternative: Using Other Email Services

If you prefer not to use SendGrid, you can modify `src/pages/api/contact.ts` to use:

#### **Resend** (Modern, Developer-Friendly)

```bash
npm install resend
```

#### **AWS SES**

```bash
npm install @aws-sdk/client-ses
```

#### **Nodemailer with Gmail/SMTP**

```bash
npm install nodemailer
```

## Testing

1. Fill out the contact form
2. Click "Send Message"
3. Watch the paper airplane animation inside the button! ✈️
4. Check the thank you modal
5. Verify email received at commercial@apamaritime.com

## Production Deployment

### Important Notes:

1. **Never commit `.env` file** - It's already in `.gitignore`
2. **Set environment variables** in your hosting platform:

   - Vercel: Project Settings > Environment Variables
   - Netlify: Site Settings > Environment Variables
   - Other platforms: Check their documentation

3. **SendGrid Email Limits**:
   - Free tier: 100 emails/day
   - Essentials: $19.95/month for 50,000 emails/month
   - Pro: $89.95/month for 100,000 emails/month

## Troubleshooting

### "Failed to send email" error:

- Check your SendGrid API key in `.env`
- Verify the API key has "Mail Send" permissions
- Ensure sender email is verified in SendGrid
- Check server console for detailed error messages
- Check SendGrid dashboard for error logs

### Email not received:

- Check spam/junk folder
- Verify `commercial@apamaritime.com` is correct
- Check SendGrid dashboard for delivery status
- Verify you haven't exceeded daily email limit (100 for free tier)

### Animation not working:

- Clear browser cache
- Check browser console for JavaScript errors
- Ensure Astro dev server is running

### SendGrid API key not working:

- Make sure you copied the entire API key (starts with `SG.`)
- API keys can only be viewed once - create a new one if lost
- Ensure the API key has "Mail Send" permission enabled

## Email Template

The email sent includes:

- Professional HTML formatting
- Your brand colors (#0c3348)
- All form fields (name, email, phone, subject, message)
- Reply-to set to the sender's email
- Plain text fallback

## Support

For issues or questions, check:

- Nodemailer docs: https://nodemailer.com/
- Astro API routes: https://docs.astro.build/en/core-concepts/endpoints/
