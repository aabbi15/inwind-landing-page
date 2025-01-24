import * as React from 'react';

export const EmailTemplate = ({ firstName, lastName, company, email, phoneNumber, message }) => (
  <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', color: '#333', padding: '20px', maxWidth: '600px', margin: 'auto', border: '1px solid #ddd', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
    <h2 style={{ color: '#4CAF50', textAlign: 'center' }}>New Contact Form Submission</h2>
    <p>Here are the details of the message you received:</p>
    <table style={{ width: '100%', borderCollapse: 'collapse', margin: '20px 0' }}>
      <tbody>
        <tr>
          <td style={{ padding: '8px', fontWeight: 'bold', borderBottom: '1px solid #ddd' }}>First Name:</td>
          <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>{firstName}</td>
        </tr>
        <tr>
          <td style={{ padding: '8px', fontWeight: 'bold', borderBottom: '1px solid #ddd' }}>Last Name:</td>
          <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>{lastName}</td>
        </tr>
        <tr>
          <td style={{ padding: '8px', fontWeight: 'bold', borderBottom: '1px solid #ddd' }}>Company:</td>
          <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>{company}</td>
        </tr>
        <tr>
          <td style={{ padding: '8px', fontWeight: 'bold', borderBottom: '1px solid #ddd' }}>Email:</td>
          <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>{email}</td>
        </tr>
        <tr>
          <td style={{ padding: '8px', fontWeight: 'bold', borderBottom: '1px solid #ddd' }}>Phone Number:</td>
          <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>{phoneNumber}</td>
        </tr>
        <tr>
          <td style={{ padding: '8px', fontWeight: 'bold', borderBottom: '1px solid #ddd' }}>Message:</td>
          <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>{message}</td>
        </tr>
      </tbody>
    </table>
    <p style={{ textAlign: 'center', color: '#888' }}>Thank you for using our contact form!</p>
  </div>
);
