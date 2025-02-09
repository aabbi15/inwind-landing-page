import * as React from 'react';

export const EmailTemplate = ({ firstName, lastName, company, email, phoneNumber, serviceType, eventLocation, size, message }) => (
  <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', color: '#333', padding: '20px', maxWidth: '600px', margin: 'auto', border: '1px solid #ddd', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
    <h2 style={{ color: '#4CAF50', textAlign: 'center' }}>New Contact Form Submission</h2>
    <p>Here are the details of the message you received:</p>
    <table style={{ width: '100%', borderCollapse: 'collapse', margin: '20px 0' }}>
      <tbody>
        <tr><td style={tableStyle}>First Name:</td><td style={tableStyle}>{firstName}</td></tr>
        <tr><td style={tableStyle}>Last Name:</td><td style={tableStyle}>{lastName}</td></tr>
        <tr><td style={tableStyle}>Company:</td><td style={tableStyle}>{company}</td></tr>
        <tr><td style={tableStyle}>Email:</td><td style={tableStyle}>{email}</td></tr>
        <tr><td style={tableStyle}>Phone Number:</td><td style={tableStyle}>{phoneNumber}</td></tr>
        <tr><td style={tableStyle}>Service Type:</td><td style={tableStyle}>{serviceType}</td></tr>
        <tr><td style={tableStyle}>Event Location:</td><td style={tableStyle}>{eventLocation}</td></tr>
        {size && <tr><td style={tableStyle}>Booth/Stand Size:</td><td style={tableStyle}>{size}</td></tr>}
        <tr><td style={tableStyle}>Message:</td><td style={tableStyle}>{message}</td></tr>
      </tbody>
    </table>
    <p style={{ textAlign: 'center', color: '#888' }}>Thank you for using our contact form!</p>
  </div>
);

const tableStyle = {
  padding: '8px',
  fontWeight: 'bold',
  borderBottom: '1px solid #ddd'
};
