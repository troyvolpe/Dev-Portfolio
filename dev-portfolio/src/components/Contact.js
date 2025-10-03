/**
 * Contact Section Component
 * 
 * Author: Troy Volpe
 * Created: 2025-09-25
 * Last Modified: 2025-10-03
 * 
 * Description:
 * Contact information section with links and contact methods.
 * Features responsive button layout and consistent emerald theme styling.
 * 
 * Contact Methods:
 * - Email: troyvolpe@gmail.com
 * - GitHub: github.com/troyvolpe
 * - LinkedIn: linkedin.com/in/-troyvolpe
 * 
 * Dependencies:
 * - React
 * - Contact.css for styling
 */

import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p>Let's connect! Feel free to reach out through any of these platforms.</p>
      <div className="contact-links">
        <a href="mailto:troyvolpe@gmail.com">
          📧 Email
        </a>
        <a href="https://github.com/troyvolpe" target="_blank" rel="noopener noreferrer">
          🐙 GitHub
        </a>
        <a href="https://linkedin.com/in/-troyvolpe" target="_blank" rel="noopener noreferrer">
          💼 LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;

