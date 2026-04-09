/**
 * Hero Section Component
 * 
 * Author: Troy Volpe
 * Created: 2025-09-29
 * Last Modified: 2025-10-03
 * 
 * Description:
 * Landing section component featuring animated introduction with title.
 * Uses Framer Motion for smooth entrance animations and modern typography.
 * 
 * Dependencies:
 * - React
 * - Framer Motion for animations
 * - Hero.css for styling
 */

import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
         Hi, I'm Troy 👋
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Incoming Cybersecurity Systems Engineer Intern at Lockheed Martin
      </motion.h2>

      <motion.h3
        className="hero-subtitle"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Current Rowan University Student & Security Analyst
      </motion.h3>

      <motion.div
        className="hero-credentials"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <span>🛡️ Security+ Certified</span>
        <span>•</span>
        <span>🔍 CySA+ Certified</span>
        <span>•</span>
        <span>🎓 Anticipated Master's in Cybersecurity</span>
        <span>•</span>
        <span>🔒 GRC Analyst</span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        Building secure systems through GRC strategy, hands-on infrastructure defense, and advanced threat analysis
      </motion.p>
      
      <motion.div
        className="hero-cta"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="resume-button primary"
        >
          📄 View Resume
        </a>
        <a 
          href="#certifications" 
          className="resume-button secondary"
        >
          🏆 View Certifications
        </a>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, delay: 1.2, repeat: Infinity }}
      >
        <span>↓</span>
      </motion.div>
    </section>
  );
};

export default Hero;
