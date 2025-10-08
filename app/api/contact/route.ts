import { NextResponse } from 'next/server'
import { createBucketClient } from '@cosmicjs/sdk'

const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
  apiEnvironment: 'staging'
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate environment variables
    if (!process.env.COSMIC_BUCKET_SLUG || !process.env.COSMIC_READ_KEY || !process.env.COSMIC_WRITE_KEY) {
      console.error('Missing Cosmic environment variables')
      return NextResponse.json(
        { error: 'Server configuration error: Missing Cosmic credentials' },
        { status: 500 }
      )
    }

    // Create contact submission in Cosmic
    const result = await cosmic.objects.insertOne({
      title: `Contact from ${name}`,
      type: 'contact-submissions',
      metadata: {
        name,
        email,
        subject,
        message,
        submission_date: new Date().toISOString().split('T')[0], // Format as YYYY-MM-DD
        status: 'New'
      }
    })

    console.log('Contact submission created successfully:', result.object?.id)

    return NextResponse.json(
      { message: 'Contact form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error submitting contact form:', error)
    
    // Provide detailed error information
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
    const errorDetails = error instanceof Error && 'response' in error 
      ? JSON.stringify((error as any).response?.data || {})
      : 'No additional details'

    return NextResponse.json(
      { 
        error: 'Failed to submit contact form',
        details: errorMessage,
        debugInfo: errorDetails
      },
      { status: 500 }
    )
  }
}