# EmailJS Setup Guide for Contact Form

## Overview
The contact form is currently set up to work with EmailJS, which allows you to send emails directly from the frontend without a backend server. For now, it shows a success message for demo purposes.

## To Enable Real Email Functionality:

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Note down your **Service ID** (e.g., `service_portfolio`)

### Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Set up your template with these variables:
   ```
   From: {{name}} <{{email}}>
   Subject: Portfolio Contact: {{subject}}
   
   Message:
   {{message}}
   
   ---
   Sent from your portfolio website
   Contact Email: {{email}}
   ```
4. Note down your **Template ID** (e.g., `template_contact`)

### Step 4: Get Public Key
1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** (e.g., `your_public_key`)

### Step 5: Update the Code
Replace the placeholder values in `components/Contact.tsx`:

```typescript
const result = await emailjs.sendForm(
  'service_portfolio', // Replace with your Service ID
  'template_contact',  // Replace with your Template ID
  form.current!,
  'your_public_key'    // Replace with your Public Key
);
```

### Step 6: Test the Form
1. Save the changes
2. Restart your development server
3. Fill out the contact form
4. Check your email for the message

## Current Behavior
- ✅ Form validation (checks for required fields)
- ✅ Loading state with spinner
- ✅ Success/error toast notifications
- ✅ Form reset after successful submission
- ✅ Responsive design
- ⏳ Email sending (currently simulated for demo)

## Email Template Variables
The form sends these variables to EmailJS:
- `name` - Visitor's name
- `email` - Visitor's email address
- `subject` - Message subject
- `message` - Message content

## Styling
The toast notifications are styled to match your portfolio theme:
- Success messages: Green with checkmark
- Error messages: Red with error icon
- Positioned at bottom-right
- Auto-dismiss after 4 seconds

## Security Notes
- EmailJS public key is safe to expose in frontend code
- No sensitive server credentials needed
- Built-in spam protection through EmailJS
- Rate limiting available in EmailJS dashboard

## Alternative Solutions
If you prefer not to use EmailJS, you can:
1. Set up a backend API route in Next.js
2. Use services like Formspree or Netlify Forms
3. Integrate with your own email server

The current implementation will work perfectly once you add your EmailJS credentials!
