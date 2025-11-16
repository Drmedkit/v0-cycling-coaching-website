import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Validate required fields
    const requiredFields = ["name", "email", "phone", "gender", "age", "package"]
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 })
      }
    }

    // Here you can process the data in several ways:

    // Option 1: Send email using a service like Resend, SendGrid, or Nodemailer
    // await sendEmail({
    //   to: 'tycho@tychocoaching.com',
    //   subject: `New coaching inquiry from ${data.name}`,
    //   html: generateEmailTemplate(data)
    // })

    // Option 2: Save to database (Supabase, MongoDB, etc.)
    // await saveToDatabase(data)

    // Option 3: Send to a webhook or external service
    // await fetch('https://your-webhook-url.com', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data)
    // })

    // For now, just log the data (remove in production)
    console.log("Contact form submission:", data)

    return NextResponse.json({ success: true, message: "Form submitted successfully" })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

// Helper function to generate email template
function generateEmailTemplate(data: any) {
  return `
    <h2>New Coaching Inquiry</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Gender:</strong> ${data.gender}</p>
    <p><strong>Age:</strong> ${data.age}</p>
    <p><strong>Package:</strong> ${data.package}</p>
    ${data.message ? `<p><strong>Message:</strong> ${data.message}</p>` : ""}
  `
}
