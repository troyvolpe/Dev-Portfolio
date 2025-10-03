/**
 * About Section Component
 * 
 * Author: Troy Volpe
 * Created: 2025-09-29
 * Last Modified: 2025-10-03
 * 
 * Description:
 * Personal information and technical skills section of the portfolio.
 * Comprehensive technology stack, features organized skill categories and
 * responsive grid layout.
 *
 * Dependencies:
 * - React
 * - About.css for styling
 */

import React from 'react';
import './About.css'; 

const About = () => {
  return (
    <section className="about">
      <h2>About Me</h2>

      <p>I'm Troy, a third-year Computer Science student currently pursuing a master’s degree in Cybersecurity, with a strong foundation in infrastructure, systems, and security principles. I am highly organized, results-driven, and thrive in environments that demand analytical thinking and technical precision. My academic background and proactive work ethic equip me to contribute effectively across a wide range of engineering and technology roles

      </p>
      <h3>Tech Stack</h3>
      <ul className="tech-list">
        <li>🛡️ Cybersecurity Principles</li>
        <li>🔒 Privacy-Compliant Development</li>
        <li>📊 Data Analytics & Logging</li>
        <li>🖥️ Self-Hosting & Deployment</li>
        <li>🐙 Git & GitHub</li>
        <li>🔧 npm & Package Management</li>
        <li>🟢 Node.js</li>
        <li>🚀 Express.js</li>
        <li>📱 JavaScript (ES6+)</li>
        <li>⚛️ React</li>
        <li>🎨 CSS3 & HTML5</li>
        <li>🎬 Framer Motion</li>

      </ul>
    </section>
  );
};

export default About;

