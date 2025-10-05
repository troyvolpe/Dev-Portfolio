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
        <strong>Cybersecurity Analyst | Governance, Risk & Compliance (GRC) Analyst</strong>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        Cybersecurity Lead blending GRC expertise with hands-on coding and network analysis to build smarter, safer systems
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
          className="resume-button"
        >
          📄 View Resume
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
