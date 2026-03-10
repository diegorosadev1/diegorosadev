/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import TechStack from './components/sections/TechStack';
import Education from './components/sections/Education';
import ProjectsPreview from './components/sections/ProjectsPreview';
import Experience from './components/sections/Experience';
import Recommendations from './components/sections/Recommendations';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';

const HomePage = () => (
  <main>
    <Hero />
    <About />
    <TechStack />
    <ProjectsPreview />
    <Experience />
    <Education />
    <Recommendations />
    <Contact />
  </main>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-navy-900 min-h-screen selection:bg-accent selection:text-navy-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
