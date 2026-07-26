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
  const resumeHref = `/Resume.pdf`;

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
        Cybersecurity Systems Engineer Intern at Lockheed Martin
      </motion.h2>

      <motion.h3
        className="hero-subtitle"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Computer Science Student | Security, Linux & Infrastructure
      </motion.h3>

      <motion.div
        className="hero-credentials"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <span>🛡️ Security+</span>
        <span>•</span>
        <span>🔍 CySA+</span>
        <span>•</span>
        <span>🐧 Linux+</span>
        <span>•</span>
        <span>🎓 B.S. Computer Science, December 2026</span>
        <span>•</span>
        <span>🔒 M.S. Cybersecurity, December 2027</span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        Building secure and reliable systems through Linux administration,
        network defense, infrastructure engineering, automation, and
        hands-on security analysis.
      </motion.p>
      
      <motion.div
        className="hero-cta"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <a 
          href={resumeHref} 
          target="_blank" 
          rel="noopener noreferrer"
          className="resume-button primary"
        >
          📄 View Resume
        </a>
        <a 
          href="#projects" 
          className="resume-button secondary"
        >
          🛠️ View Projects
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
