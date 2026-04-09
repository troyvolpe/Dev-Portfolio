/**
 * Certifications Section Component
 * 
 * Author: Troy Volpe
 * Created: 2026-01-15
 * 
 * Description:
 * Displays professional certifications (earned and in-progress) with Security+
 * knowledge domains and skills. Features animated cert cards with badges.
 * 
 * Dependencies:
 * - React
 * - Framer Motion for animations
 * - Certifications.css for styling
 */

import React from 'react';
import { motion } from 'framer-motion';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      name: 'CompTIA Security+',
      issuer: 'CompTIA',
      status: 'earned',
      date: 'January 2026',
      logo: '🛡️',
      certLink: '/SEC+_CERT.jpg',
      skills: [
        'Threats, Attacks & Vulnerabilities',
        'Architecture & Design',
        'Implementation',
        'Operations & Incident Response',
        'Governance, Risk & Compliance'
      ]
    },
    {
      name: 'CompTIA CySA+',
      issuer: 'CompTIA',
      status: 'earned',
      date: 'April 2026',
      logo: '🔍',
      certLink: '/CySA+_CERT.pdf',
      skills: [
        'Threat & Vulnerability Management',
        'Software & Application Security',
        'Security Architecture & Tool Sets',
        'Security Operations & Monitoring',
        'Incident Response & Recovery'
      ]
    },
    {
      name: 'CompTIA Security Analytics Professional (CSAP)',
      issuer: 'CompTIA',
      status: 'earned',
      date: '2026',
      logo: '🧭',
      certLink: '/CSAP_Certified.pdf',
      badgeLabel: '🧭 Pathway',
      skills: []
    },
    {
      name: 'Splunk Core Certified User',
      issuer: 'Splunk',
      status: 'in-progress',
      date: 'Expected 2026',
      logo: '📊',
      skills: []
    },
    {
      name: 'Linux+',
      issuer: 'CompTIA',
      status: 'in-progress',
      date: 'Expected 2026',
      logo: '🐧',
      skills: []
    },

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="certifications" id="certifications">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Certifications & Skills</h2>
        <p className="section-subtitle">
          Continuous learning and professional development in cybersecurity
        </p>
      </motion.div>

      <motion.div
        className="certs-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className={`cert-card ${cert.status}`}
            variants={cardVariants}
          >
            <div className="cert-header">
              <div className="cert-logo">{cert.logo}</div>
              <span className={`cert-badge ${cert.status}`}>
                {cert.badgeLabel || (cert.status === 'earned' ? '✓ Certified' : '📚 In Progress')}
              </span>
            </div>
            
            <h3>{cert.name}</h3>
            <p className="cert-issuer">{cert.issuer}</p>
            <p className="cert-date">{cert.date}</p>
            
            {cert.certLink && (
              <a 
                href={cert.certLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="cert-link"
              >
                📜 View Certificate
              </a>
            )}
            
            {cert.skills.length > 0 && (
              <div className="cert-skills">
                <h4>Knowledge Domains:</h4>
                <ul>
                  {cert.skills.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="career-highlight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="highlight-content">
          <span className="highlight-icon">🚀</span>
          <div>
            <h3>Incoming Cybersecurity Systems Engineer Intern</h3>
            <p>Accepted position at <strong>Lockheed Martin</strong> - Starting May 2026</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;
