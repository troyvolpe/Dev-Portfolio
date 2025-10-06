/**
 * Projects Section Component
 * 
 * Author: Troy Volpe
 * Created: 2025-09-29
 * Last Modified: 2025-10-03
 * 
 * Description:
 * Interactive projects showcase component featuring expandable project cards.
 * Each project includes title, description, detailed information, and GitHub links.
 * 
 * Dependencies:
 * - React (useState hook for state management)
 * - Projects.css for styling
 */

import React, { useState } from 'react';
import './Projects.css'; // CSS Styling

// Project data
const projects = [
  {
    title: '📚 Portfolio Site',
    description: 'This very site! Built with React and hosted on a Raspberry Pi.',
    details: 'A responsive portfolio website showcasing my projects and skills. Built using React with modern CSS styling, deployed on a self-hosted Raspberry Pi server. Features include project galleries, contact forms, and responsive design principles.',
    link: 'https://github.com/troyvolpe/Dev-Portfolio',
  },
  {
    title: '🖥️ Raspberry Pi Domain Host',
    description: 'A Raspberry Pi configured to host this very site using Nginx and Docker.',
    details: 'This project involved setting up a Raspberry Pi to serve as a web host for my portfolio site. Utilizing Nginx as the web server and Docker for containerization, I was able to create a lightweight and efficient hosting environment. The setup includes SSL configuration for secure access and is optimized for performance.',
    link: 'https://github.com/troyvolpe/Raspberry-Pi-Domain-Host'
  },
  {
    title: '⚙️ Visitor Logging System',
    description: 'A simple visitor logging system using Node.js and Express.',
    details: 'A web application that logs visitor information such as IP address, visit time, and user agent. Built with Node.js and Express, this system stores logs in a JSON file and provides an API endpoint for retrieving visit data. Designed with privacy in mind, it avoids storing sensitive information and complies with data protection regulations.',
    link: 'https://github.com/troyvolpe/Visitor-Logging-System'
  },
  {
    title: '🍯 Raspberry Pi Honeypot',
    description: 'A Raspberry Pi dedicated to detecting and logging unauthorized access attempts.',
    details: 'Security monitoring system deployed on Raspberry Pi hardware. Monitors network traffic, logs suspicious activities, and sends alerts for potential security threats. Setup with Internet Storm Center (ISC) for threat intelligence integration.',
    link: 'https://github.com/troyvolpe/Raspberry-Pi-Honeypot',
  },
  {
    title: '🔐 Simple Login System',
    description: 'A simple login system using diverse programming languages and frameworks.',
    details: 'Multi-language authentication system showcasing various implementation approaches. Includes versions in Python (Flask), JavaScript (Node.js), and Java. Features user registration, login/logout, and session management.',
    link: 'https://github.com/troyvolpe/Simple-Login-System'
  },
  {
    title: '🤖 Discord Bot',
    description: 'A Discord bot built with Node.js and Discord.js.',
    details: 'A feature-rich Discord bot that provides various utilities and fun commands. Built with Node.js and the Discord.js library.',
    link: 'https://github.com/troyvolpe/Discord-Bot',
  }
];

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleDetails = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section className="projects">
      <h2>📁 Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            
            {expandedProject === index && (
              <div className="project-details">
                <p>{project.details}</p>
              </div>
            )}
            
            <div className="project-buttons">
              <button 
                className="read-more-btn" 
                onClick={() => toggleDetails(index)}
              >
                {expandedProject === index ? 'Show less ↑' : 'Read more →'}
              </button>
              
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="github-link">
                  View on GitHub →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

