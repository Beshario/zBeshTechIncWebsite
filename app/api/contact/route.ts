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
    if (!process.env.RESEND_API_KEY) {
      console.error('[contact] RESEND_API_KEY is not configured. Message from', email, 'was NOT delivered.')
      return NextResponse.json(
        { error: 'Email delivery is not configured. Please email contact@zbesh.com directly.' },
        { status: 503 }
      )
    }

    if (!process.env.RESEND_FROM_EMAIL) {
      console.error('[contact] RESEND_FROM_EMAIL is not configured.')
      return NextResponse.json(
        { error: 'Email sender is not configured. Please email contact@zbesh.com directly.' },
        { status: 503 }
      )
    }

    {
      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM_EMAIL,
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
        console.error('[contact] Resend API error:', error)
        throw new Error('Failed to send email via Resend')
      }

      console.log('[contact] Email sent successfully via Resend')
    }

    return NextResponse.json(
      { success: true, message: 'Message received' },
      { status: 200 }
    )
  } catch (error) {
    console.error('[contact] Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}
