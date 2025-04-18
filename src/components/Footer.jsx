import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full text-gray-800 py-12">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">MindEase</h3>
            <p className="text-sm mb-4">Your mental health companion, providing support and guidance whenever you need it.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-500 hover:text-blue-600">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-600">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-600">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-blue-500">Home</a></li>
              <li><a href="#" className="text-sm hover:text-blue-500">About Us</a></li>
              <li><a href="#" className="text-sm hover:text-blue-500">Help Center</a></li>
              <li><a href="#" className="text-sm hover:text-blue-500">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-blue-500">Blog</a></li>
              <li><a href="#" className="text-sm hover:text-blue-500">FAQs</a></li>
              <li><a href="#" className="text-sm hover:text-blue-500">Privacy Policy</a></li>
              <li><a href="#" className="text-sm hover:text-blue-500">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-blue-500" />
                <a href="mailto:contact@mindease.com" className="text-sm hover:text-blue-500">contact@mindease.com</a>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhone className="text-blue-500" />
                <a href="tel:+1234567890" className="text-sm hover:text-blue-500">+1 (234) 567-890</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-100 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} MindEase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 