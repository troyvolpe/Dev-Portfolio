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
  const resumeHref = `${process.env.PUBLIC_URL}/Resume.pdf`;

  return (
    <section className="about">
      <h2>About Me</h2>

      <p>
        I'm Troy, a fourth-year Computer Science student at Rowan University pursuing a
        B.S. in Computer Science and an M.S. in Cybersecurity. My primary interests are
        cybersecurity, Linux systems, networking, infrastructure, and the design of
        secure, reliable environments.
      </p>

      <p>
        Through professional experience and hands-on homelab projects, I have worked
        with Linux administration, network security, vulnerability management,
        containerized services, system monitoring, access controls, and security
        analysis. I enjoy understanding how systems operate, identifying weaknesses,
        and building practical solutions that improve security, reliability, and
        visibility.
      </p>
      
      <p>
        I currently hold the CompTIA Security+, CySA+, and Linux+ certifications, along
        with the CompTIA Security Analytics Professional stackable certification. My
        long-term goal is to continue developing as a cybersecurity and systems
        professional while expanding my experience across secure infrastructure,
        cloud environments, automation, and security engineering.
      </p>

      <p>
        <a href={resumeHref} target="_blank" rel="noopener noreferrer">View Resume</a>
      </p>

      <h3>Technical Skills</h3>
      <ul className="tech-list">
        <li>🐧 Linux System Administration</li>

        <li>🌐 Networking & Network Security</li>

        <li>🛡️ Cybersecurity Operations</li>

        <li>🔎 Vulnerability Assessment</li>

        <li>⚠️ Threat & Vulnerability Management</li>

        <li>🚨 Incident Detection & Response</li>

        <li>📊 Security Monitoring & Log Analysis</li>

        <li>🔍 SIEM & Security Analytics</li>

        <li>🔐 Identity & Access Management</li>

        <li>🧱 System Hardening & Access Controls</li>

        <li>🏗️ Security Architecture & Design</li>

        <li>📋 NIST Cybersecurity Framework</li>

        <li>🐳 Docker & Containerized Services</li>

        <li>🖥️ Self-Hosting & Homelab Infrastructure</li>

        <li>☁️ Cloud & Virtualized Environments</li>

        <li>📡 System Monitoring & Availability</li>

        <li>⚙️ Bash Scripting & Automation</li>

        <li>🐍 Python</li>

        <li>📱 JavaScript</li>

        <li>⚛️ React</li>

        <li>🟢 Node.js & Express.js</li>

        <li>🐙 Git & GitHub</li>
      </ul>
    </section>
  );
};

export default About;

