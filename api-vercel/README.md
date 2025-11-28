# APA Maritime API - Vercel Serverless Function

This is a serverless API for the APA Maritime contact form, deployed on Vercel.

## Setup Instructions

### 1. Install Vercel CLI

```bash
npm install -g vercel
```

### 2. Install Dependencies

```bash
cd api-vercel
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the `api-vercel` folder:

```env
SENDGRID_API_KEY=your-sendgrid-api-key-here
SENDGRID_FROM_EMAIL=sandarbh88@gmail.com
```

**Important:** Make sure your sender email is verified in SendGrid!

### 4. Test Locally

```bash
npm run dev
```

This will start a local development server at `http://localhost:3000`

Test the API endpoint:
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+1234567890",
    "subject": "Test Subject",
    "message": "This is a test message"
  }'
```

### 5. Deploy to Vercel

#### First Time Deployment:

```bash
vercel login
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N**
- Project name? **apa-maritime-api** (or your preferred name)
- In which directory is your code located? **./api-vercel**
- Want to override the settings? **N**

#### Add Environment Variables to Vercel:

After first deployment, add your environment variables:

```bash
vercel env add SENDGRID_API_KEY
vercel env add SENDGRID_FROM_EMAIL
```

Or add them via the Vercel Dashboard:
1. Go to https://vercel.com/dashboard
2. Select your project
3. Go to Settings > Environment Variables
4. Add:
   - `SENDGRID_API_KEY` = your SendGrid API key
   - `SENDGRID_FROM_EMAIL` = sandarbh88@gmail.com

#### Deploy to Production:

```bash
npm run deploy
```

Or simply:
```bash
vercel --prod
```

### 6. Get Your API URL

After deployment, Vercel will give you a URL like:
```
https://apa-maritime-api.vercel.app
```

Your contact API endpoint will be:
```
https://apa-maritime-api.vercel.app/api/contact
```

### 7. Update Your Website

Update the contact form in your main website to use this API URL instead of the local one.

## API Endpoint

### POST /api/contact

Send a contact form submission.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "subject": "General Enquiry",
  "message": "Hello, I have a question..."
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

**Error Response (400/500):**
```json
{
  "success": false,
  "message": "Error message here"
}
```

## Troubleshooting

### SendGrid 403 Error
- Make sure your sender email is verified in SendGrid
- Go to SendGrid Dashboard > Settings > Sender Authentication
- Verify your sender email

### CORS Errors
- The API is configured to allow requests from any origin
- If you still get CORS errors, check the browser console for details

### Environment Variables Not Working
- Make sure you've added them to Vercel (not just locally)
- Redeploy after adding environment variables: `vercel --prod`

## Support

For issues, contact the development team.

