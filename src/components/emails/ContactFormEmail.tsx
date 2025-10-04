import React from 'react';

interface ContactFormEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  name,
  email,
  subject,
  message,
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: 1.6, color: '#333' }}>
    <h1 style={{ color: '#0D6EFD' }}>New Contact Form Submission</h1>
    <p>You received a new message from your website's contact form.</p>
    <hr style={{ borderColor: '#eee' }} />
    <h2 style={{ color: '#1E40AF' }}>Message Details:</h2>
    <ul>
      <li><strong>Name:</strong> {name}</li>
      <li><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></li>
      <li><strong>Subject:</strong> {subject}</li>
    </ul>
    <h3 style={{ color: '#1E40AF' }}>Message:</h3>
    <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
      <p style={{ whiteSpace: 'pre-wrap', margin: 0 }}>{message}</p>
    </div>
    <hr style={{ borderColor: '#eee', marginTop: '20px' }} />
    <p style={{ fontSize: '12px', color: '#999' }}>This email was sent from the contact form on stevuthtech.com.</p>
  </div>
);
