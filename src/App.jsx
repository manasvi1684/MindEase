import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import PageTransition from './components/PageTransition';
import Login from './pages/Login';
import Register from './pages/Register';
import Settings from './pages/Settings';
import HelpCenter from './pages/HelpCenter';
import { ThemeProvider } from './context/ThemeContext';
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Navbar />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={
                <PageTransition>
                  <div className="relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-blue-800 mb-2">MindEase</h1>
                        <p className="text-blue-600">Your Mental Health Companion</p>
                      </div>
                      <div className="max-w-3xl mx-auto">
                        <Home />
                      </div>
                    </div>
                  </div>
                </PageTransition>
              } />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/help" element={<HelpCenter />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
