import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { 
      name, 
      email, 
      phone, 
      phoneCountryCode, 
      organization, 
      country, 
      message, 
      formType,
      submittedAt,
      // pods-specific optional fields
      podLane,
      stack,
      topTasks,
      duration,
      podSize,
      numInterns
    } = data;

    // Validate required fields
    if (!name || !email || !formType) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Determine form type label
    const formTypeLabels: { [key: string]: string } = {
      'fund': 'Fund a Training Cohort',
      'partner': 'Partnership Inquiry',
      'academy': 'Academy Application',
      'pods': 'Billy Pods Request'
    };

    const formLabel = formTypeLabels[formType] || formType;

    // Build email content
    let emailContent = `
      <h2>New ${formLabel} Submission</h2>
      <p><strong>Submitted:</strong> ${submittedAt || new Date().toISOString()}</p>
      <hr />
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phoneCountryCode || ''} ${phone}</p>` : ''}
      ${organization ? `<p><strong>Organization:</strong> ${organization}</p>` : ''}
      ${country ? `<p><strong>Country:</strong> ${country}</p>` : ''}
      ${message ? `<p><strong>Message:</strong></p><p>${message.replace(/\n/g, '<br />')}</p>` : ''}
    `;

    // Append pods-specific details if present
    if (formType === 'pods') {
      emailContent += `
        <hr />
        <h3>Billy Pods Details</h3>
        ${podLane ? `<p><strong>Pod Lane:</strong> ${podLane}</p>` : ''}
        ${stack ? `<p><strong>Stack & Tools:</strong> ${stack}</p>` : ''}
        ${topTasks ? `<p><strong>Top Tasks:</strong></p><p>${topTasks.replace(/\n/g, '<br />')}</p>` : ''}
        ${duration ? `<p><strong>Duration (weeks):</strong> ${duration}</p>` : ''}
        ${podSize ? `<p><strong>Pod Size:</strong> ${podSize}</p>` : ''}
        ${numInterns ? `<p><strong>Number of Interns:</strong> ${numInterns}</p>` : ''}
      `;
    }

    // Send email using Resend
    await resend.emails.send({
      from: 'Blue Ox Kampus <onboarding@resend.dev>',
      to: 'blueoxrecruit@gmail.com',
      subject: `New ${formLabel} - ${name}`,
      html: emailContent,
      replyTo: email
    });

    console.log('Application submitted:', { formType, name, email });

    return NextResponse.json({ success: true, message: 'Application submitted successfully' });
  } catch (err) {
    console.error('Error submitting application:', err);
    return NextResponse.json({ 
      error: 'Failed to submit application', 
      details: err instanceof Error ? err.message : 'Unknown error'
    }, { status: 500 });
  }
}
