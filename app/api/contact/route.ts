import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { staff } from '@/lib/staff'

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export async function POST(request: Request) {
  const { firstName, lastName, contact, subject, message } = await request.json()

  if (!firstName || !lastName || !contact || !message) {
    return NextResponse.json({ error: 'Please fill in all required fields.' }, { status: 400 })
  }

  const gmailUser = process.env.GMAIL_USER
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD

  if (!gmailUser || !gmailAppPassword) {
    return NextResponse.json({ error: 'Email is not configured.' }, { status: 500 })
  }

  const staffEmails = staff.map((person) => person.email.trim())
  const fullName = `${firstName} ${lastName}`
  const emailSubject = `New Contact Form Message: ${subject || 'General Enquiry'}`

  const html = `
    <div style="font-family: Georgia, serif; color: #0A0E2A; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #0A0E2A; padding: 24px 32px;">
        <p style="color: #E8C060; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; margin: 0;">
          Chapel of Pentecost FNHE
        </p>
        <h1 style="color: #FDFAF4; font-size: 22px; font-weight: 400; margin: 8px 0 0;">
          New Contact Form Submission
        </h1>
      </div>
      <div style="background-color: #FDFAF4; padding: 32px; border: 1px solid rgba(10,14,42,0.1); border-top: none;">
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
          <tr>
            <td style="padding: 8px 0; color: #C9973A; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; width: 140px; vertical-align: top;">Name</td>
            <td style="padding: 8px 0; font-size: 16px;">${escapeHtml(fullName)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #C9973A; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; vertical-align: top;">Email / Phone</td>
            <td style="padding: 8px 0; font-size: 16px;">${escapeHtml(contact)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #C9973A; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; vertical-align: top;">Subject</td>
            <td style="padding: 8px 0; font-size: 16px;">${escapeHtml(subject || 'General Enquiry')}</td>
          </tr>
        </table>
        <p style="color: #C9973A; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; margin: 0 0 8px;">Message</p>
        <p style="font-size: 16px; line-height: 1.6; white-space: pre-wrap; margin: 0; padding: 16px; background-color: #ffffff; border: 1px solid rgba(10,14,42,0.1);">${escapeHtml(message)}</p>
        <p style="margin-top: 32px; font-size: 12px; color: rgba(10,14,42,0.5);">
          This message was sent from the contact form on the church website. Reply directly to this email to respond to ${escapeHtml(firstName)}.
        </p>
      </div>
    </div>
  `

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailUser,
      pass: gmailAppPassword,
    },
  })

  try {
    await transporter.sendMail({
      from: `"Chapel of Pentecost FNHE Website" <${gmailUser}>`,
      to: staffEmails,
      replyTo: contact.includes('@') ? contact : undefined,
      subject: emailSubject,
      html,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Failed to send contact form email', error)
    return NextResponse.json({ error: 'Failed to send message. Please try again later.' }, { status: 500 })
  }
}
