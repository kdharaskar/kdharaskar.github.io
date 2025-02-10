// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Resume from './components/Resume';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<div style={{ padding: '1rem' }}>
            <h1>Welcome to My&apos;s Portfolio</h1>
            <p>
              I am an experienced PySpark Developer specializing in scalable data pipelines and cloud-based data solutions.
            </p>
            <p>
              Explore my <a href="/resume">Resume</a> to learn more about my experience, projects, and education.
            </p>
          </div>} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;