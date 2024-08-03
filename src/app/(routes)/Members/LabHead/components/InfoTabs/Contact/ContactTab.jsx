import React from 'react';
import styles from './ContactTab.module.css';

const ContactTab = () => {
  // Dummy data for contact information
  const contact = {
    email: 'johndoe@example.com',
    phone: '+1234567890',
    office: 'Room 101, ABC Building',
  };

  return (
    <div className={styles.contactTab}>
      <h2>Contact Information</h2>
      <ul>
        <li><strong>Email:</strong> {contact.email}</li>
        <li><strong>Phone:</strong> {contact.phone}</li>
        <li><strong>Office:</strong> {contact.office}</li>
      </ul>
    </div>
  );
};

export default ContactTab;
