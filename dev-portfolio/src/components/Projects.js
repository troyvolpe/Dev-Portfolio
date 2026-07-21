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
    title: '🌐 Self-Hosted Portfolio Infrastructure',
    description:
      'A React portfolio deployed through self-hosted Linux infrastructure with secure public access.',
    details:
      'A responsive portfolio website built with React and hosted on my own infrastructure. The deployment uses Linux, Nginx, Cloudflare, DNS management, TLS, and reverse proxy configuration. I am redesigning the application so it can be packaged and deployed consistently as a Docker container.',
    link: 'https://github.com/troyvolpe/Dev-Portfolio',
  },

  {
    title: '🏠 Multi-Node Homelab',
    description:
      'A multi-system Linux environment built for hosting, monitoring, networking, and security experimentation.',
    details:
      'A growing homelab consisting of Linux servers, Raspberry Pis, managed services, containerized applications, network storage, and dedicated infrastructure roles. The environment is used to practice system administration, network segmentation, service deployment, access control, troubleshooting, monitoring, and security engineering.',
    link: 'https://troyvolpe.com/coming_soon',
  },

  {
    title: '🎬 Self-Hosted Media Platform',
    description:
      'A private media platform built with Jellyfin and supporting containerized services.',
    details:
      'A self-hosted media environment using Jellyfin alongside supporting services such as Sonarr, Radarr, Prowlarr, Jellyseerr, and more. The project includes Docker Compose orchestration, storage management, reverse proxy configuration, VPN-routed traffic, remote access controls, and performance troubleshooting.',
    link: 'https://troyvolpe.com/coming_soon',
  },

  {
    title: '🔐 WireGuard Remote Access Network',
    description:
      'A private VPN environment used to securely administer and access homelab services.',
    details:
      'A WireGuard network designed to provide encrypted remote access to servers and internal applications. The environment uses dedicated VPN addressing, restricted firewall rules, SSH key authentication, and service-level access controls to reduce unnecessary public exposure.',
    link: 'https://troyvolpe.com/coming_soon',
  },

  {
    title: '📊 Infrastructure Monitoring Platform',
    description:
      'Centralized availability and system monitoring across multiple homelab nodes.',
    details:
      'A monitoring environment using Uptime Kuma and Netdata to track service availability, system health, resource utilization, and node performance. The platform includes automated notifications and provides centralized visibility into the condition of hosted services and infrastructure.',
    link: 'https://troyvolpe.com/coming_soon',
  },

  {
    title: '💾 Automated Backup System',
    description:
      'A Linux backup workflow designed around encrypted, versioned, and recoverable data.',
    details:
      'An automated backup project using Restic to protect server configurations, application data, and important files. The design includes scheduled backups, retention policies, repository validation, recovery testing, and centralized backup storage.',
    link: 'https://troyvolpe.com/coming_soon',
  },

  {
    title: '🔎 Automated Vulnerability Scanner',
    description:
      'A scheduled vulnerability assessment workflow built around Nessus and Linux automation.',
    details:
      'A vulnerability management project designed to run Nessus scans against authorized homelab systems. The workflow includes a maintained target inventory, scheduled scan execution, API-based report exports, result organization, and remediation tracking.',
    link: 'https://troyvolpe.com/coming_soon',
  },

  {
    title: '🍯 Raspberry Pi Honeypot',
    description:
      'A dedicated Raspberry Pi environment for observing and documenting malicious activity.',
    details:
      'A security monitoring project focused on deploying an isolated honeypot to collect unauthorized access attempts and attack telemetry. The planned environment emphasizes network isolation, safe log collection, alerting, and analysis of observed attacker behavior.',
    link: 'https://github.com/troyvolpe/Raspberry-Pi-Honeypot',
  },

  {
    title: '🚫 Network-Wide DNS Filtering',
    description:
      'A Pi-hole deployment designed to provide DNS filtering and visibility across the network.',
    details:
      'A network-wide DNS filtering project using Pi-hole to block unwanted domains, review DNS activity, and centrally manage filtering policies. The deployment is being redesigned to integrate cleanly with the homelab DHCP, routing, and monitoring environment.',
    link: 'https://github.com/troyvolpe/Raspberry-Pi-WiFi-Ad-Blocker',
  },

  {
    title: '📈 Local AI Market Watch',
    description:
      'A local AI-assisted platform for collecting and analyzing market-related information.',
    details:
      'An experimental platform designed to collect public market data, company news, and sentiment signals for local analysis. The planned architecture combines scheduled data collection, structured storage, local language models through Ollama, alerting, and dashboards. The system is intended for research and analysis rather than autonomous trading.',
    link: 'https://troyvolpe.com/coming_soon',
  },

  //{
    //title: '🤖 Discord Bot',
    //description: 'A Discord bot built with Node.js and Discord.js.',
    //details: 'A feature-rich Discord bot that provides various utilities and fun commands. Built with Node.js and the Discord.js library.',
    //link: 'https://github.com/troyvolpe/Discord-Bot',
  //}
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

