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



function App() {
  // Initialize visitor logging with error handling
  useEffect(() => {
    const logVisit = async () => {
      try {
        // Determine the correct API URL based on environment
        const isDevelopment = window.location.hostname === 'localhost';
        const apiUrl = isDevelopment 
          ? 'http://localhost:3001/log-visit'
          : '/api/log-visit';  // Use nginx proxy in production
        
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
        // Silently handle visitor logging errors to prevent app crashes
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
        <Projects />
        <About />
        <Contact />
        
        <p style={{ 
          fontSize: '0.8rem', 
          textAlign: 'center', 
          marginTop: '2rem',
          color: '#a7f3d0',
          maxWidth: '600px',
          margin: '2rem auto 0 auto',
          padding: '0 1rem'
        }}>
          This site logs basic visit data (IP, browser, timestamp) for performance and analytics. 
          No personal information is collected.
        </p>
      </header>
    </div>
  );
}

export default App;
