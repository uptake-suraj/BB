import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { getContactInquiryEmailHtml, getFranchiseApplicationEmailHtml } from '@/lib/email-templates';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, city, subject, message, model, investment } = body;

    const targetEmail = process.env.CONTACT_RECEIVER_EMAIL;
    const isFranchise = model || (subject && subject.toLowerCase().includes('franchise'));

    const emailSubject = isFranchise
      ? `[The Burger Baba] 🍔 New Franchise Application from ${name || 'Applicant'}`
      : `[The Burger Baba] 📩 New ${subject || 'Contact Inquiry'} from ${name || 'Visitor'}`;

    const emailHtml = isFranchise
      ? getFranchiseApplicationEmailHtml({ name, phone, email, city, model, investment, message })
      : getContactInquiryEmailHtml({ name, phone, email, city, subject, message });

    // Forward entry to Google Sheet Webhook if GOOGLE_SHEET_WEBHOOK_URL is configured
    if (process.env.GOOGLE_SHEET_WEBHOOK_URL) {
      try {
        await fetch(process.env.GOOGLE_SHEET_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
            name,
            phone,
            email,
            city,
            model: model || 'N/A',
            subject: subject || 'Franchise Application',
            message: message || '',
          }),
        });
      } catch (sheetErr) {
        console.error('Google Sheet Sync Error:', sheetErr);
      }
    }

    // 1. Primary: Nodemailer SMTP
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '465', 10);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (smtpUser && smtpPass && smtpPass !== 'your_gmail_app_password_here') {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"The Burger Baba Web Form" <${smtpUser}>`,
        to: targetEmail,
        replyTo: email || smtpUser,
        subject: emailSubject,
        html: emailHtml,
      });

      return NextResponse.json({ success: true, message: 'Email sent successfully via Nodemailer!' });
    }

    // 2. Fallback: Web3Forms
    if (process.env.WEB3FORMS_ACCESS_KEY) {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: process.env.WEB3FORMS_ACCESS_KEY,
          subject: emailSubject,
          from_name: 'The Burger Baba Website',
          to_email: targetEmail,
          name,
          phone,
          email,
          city,
          inquiry_type: subject,
          franchise_model: model,
          capital_investment: investment,
          message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        return NextResponse.json({ success: true, message: 'Email sent successfully via Web3Forms!' });
      }
    }

    // 3. Fallback: Resend
    if (process.env.RESEND_API_KEY) {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'The Burger Baba <onboarding@resend.dev>',
          to: [targetEmail],
          subject: emailSubject,
          html: emailHtml,
        }),
      });
      if (res.ok) {
        return NextResponse.json({ success: true, message: 'Email sent successfully via Resend!' });
      }
    }

    console.log('Inquiry received for:', targetEmail, body);
    return NextResponse.json({
      success: true,
      message: 'Inquiry received successfully! (Please add your Gmail App Password to .env to send live emails)',
    });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to send inquiry email.' },
      { status: 500 }
    );
  }
}
