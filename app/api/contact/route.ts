import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Resend email sending (requires RESEND_API_KEY environment variable)
    // If Resend is configured, use it; otherwise, log for manual follow-up
    if (process.env.RESEND_API_KEY) {
      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
          to: 'contact@zbesh.com',
          reply_to: email,
          subject: `New Contact Form Submission from ${name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          `,
        }),
      })

      if (!resendResponse.ok) {
        const error = await resendResponse.text()
        console.error('[v0] Resend API error:', error)
        throw new Error('Failed to send email via Resend')
      }

      console.log('[v0] Email sent successfully via Resend')
    } else {
      // Log the submission for manual follow-up if Resend is not configured
      console.log('[v0] Contact form submission (Resend not configured):')
      console.log(`Name: ${name}`)
      console.log(`Email: ${email}`)
      console.log(`Message: ${message}`)
      console.log('Note: Add RESEND_API_KEY environment variable to enable automatic email sending')
    }

    return NextResponse.json(
      { success: true, message: 'Message received' },
      { status: 200 }
    )
  } catch (error) {
    console.error('[v0] Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}
