/**
 * Portfolio Website - Main Application Component
 * 
 * Author: Troy Volpe
 * Created: 2025-09-25
 * Last Modified: 2025-10-03
 * 
 * Description:
 * Main React application component that serves as the entry point for the portfolio website.
 * Includes visitor logging functionality and renders all major sections of the portfolio.
 * 
 * Dependencies:
 * - React 19.1.1
 * - Custom components from ./components/
 * - Visitor logging system (optional)
 */

import logo from './profilePicture.jpg';
import './App.css';
import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certifications from './components/Certifications';



function App() {
  // Initialize visitor logging with error handling
  useEffect(() => {
    const logVisit = async () => {
      try {
        // Determine the correct API URL based on environment
        const isDevelopment = window.location.hostname === 'localhost';
        const apiUrl = isDevelopment 
          ? 'http://localhost:3001/log-visit'
          : '/api/log-visit'; 
        
        await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            timestamp: new Date().toISOString(),
            page: 'homepage'
          })
        });
        console.log('Visit logged successfully');
      } catch (error) {
        console.log('Visitor logging unavailable:', error.message);
      }
    };

    logVisit();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Troy Volpe Profile" />
        
        <Hero />
        <Certifications />
        <Projects />
        <About />
        <Contact />
      </header>
      
      <footer className="App-footer">
        <div className="cert-logos-section">
          <h3>Industry Certifications</h3>
          <div className="cert-logos-container">
            <a href="/SEC+_CERT.jpg" target="_blank" rel="noopener noreferrer" className="cert-logo-item" title="CompTIA Security+">
              <img src="/Sec+_Logo.png" alt="Security+ Logo" />
            </a>
            <a href="/CySA+_CERT.pdf" target="_blank" rel="noopener noreferrer" className="cert-logo-item" title="CompTIA CySA+">
              <img src="/CySA+_Logo.png" alt="CySA+ Logo" />
            </a>
            <a href="https://www.comptia.org/en-us/resources/stackables/#:~:text=CompTIA%20Security%20Analytics%20Professional" target="_blank" rel="noopener noreferrer" className="cert-logo-item" title="CompTIA Security Analytics Professional (CSAP) Stackable">
              <img src="/CSAP_Certified.png" alt="CompTIA Security Analytics Professional (CSAP) Pathway" />
            </a>
          </div>
        </div>
        <p className="privacy-notice">
          This site logs basic visit data (IP, browser, timestamp) for performance and analytics. 
          No personal information is collected.
        </p>
      </footer>
    </div>
  );
}

export default App;
