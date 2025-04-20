import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: FaTwitter, href: 'https://twitter.com/mindease' },
    { icon: FaFacebook, href: 'https://facebook.com/mindease' },
    { icon: FaInstagram, href: 'https://instagram.com/mindease' },
    { icon: FaLinkedin, href: 'https://linkedin.com/company/mindease' },
  ];

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
        { name: 'Blog', href: '/blog' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'FAQ', href: '/faq' },
      ],
    },
    {
      title: 'Features',
      links: [
        { name: 'AI Chat', href: '/chat' },
        { name: 'Mindfulness', href: '/mindfulness' },
        { name: 'Exercises', href: '/exercises' },
        { name: 'Progress Tracking', href: '/progress' },
      ],
    },
  ];

  return (
    <motion.footer 
      className="bg-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <motion.div 
              className="flex items-center mb-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/" className="text-3xl font-bold text-gray-900">
                MindEase
              </Link>
            </motion.div>
            <p className="text-gray-600 mb-8 max-w-md">
              Your AI-powered mental health companion, providing 24/7 emotional support and personalized guidance for a balanced life.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>

          {footerLinks.map((column, columnIndex) => (
            <div key={columnIndex}>
              <h3 className="text-gray-900 font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: linkIndex * 0.1 }}
                  >
                    <Link
                      to={link.href}
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <motion.div 
          className="mt-12 pt-8 border-t border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} MindEase. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer; 