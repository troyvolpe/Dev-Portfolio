/**
 * About Section Component
 * 
 * Author: Troy Volpe
 * Created: 2025-09-29
 * Last Modified: 2026-07-20
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

      <p>
        I'm Troy, a fourth-year Computer Science student currently pursuing a master’s degree in Cybersecurity, with a strong foundation in infrastructure, systems, and security principles. I focus on building and defending reliable systems across Linux, cloud, and application environments, and I value clear analysis, disciplined execution, and practical security controls.
      </p>

      <p>
        My current certifications include CompTIA Security+, CySA+, Linux+, and the Security Analytics Professional stackable pathway. You can also review my latest resume for a fuller snapshot of my experience, projects, and technical background.
      </p>

      <p>
        <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
      </p>

      <h3>Tech Stack</h3>
      <ul className="tech-list">
        <li>🛡️ Cybersecurity Principles</li>
        <li>🔐 IAM & Access Control</li>
        <li>🌐 Network Security</li>
        <li>🔎 Vulnerability Assessment</li>
        <li>⚠️ Threat & Vulnerability Management</li>
        <li>🚨 Incident Response & Recovery</li>
        <li>🛠️ Security Architecture & Design</li>
        <li>📋 GRC Frameworks (NIST, ISO 27001)</li>
        <li>🔍 SIEM/Splunk</li>
        <li>📊 Security Monitoring & Analytics</li>
        <li>🐧 Linux/Unix</li>
        <li>🟢 Node.js</li>
        <li>🚀 Express.js</li>
        <li>🛠️ Python</li>
        <li>📱 JavaScript (ES6+)</li>
        <li>⚛️ React</li>
        <li>🖥️ Self-Hosting & Deployment</li>
        <li>🐙 Git & GitHub</li>
        <li>🔧 npm & Package Management</li>
        <li>📊 Data Analytics & Logging</li>
      </ul>
    </section>
  );
};

export default About;

