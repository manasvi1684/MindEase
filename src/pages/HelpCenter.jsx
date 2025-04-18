import React, { useState } from 'react';

const HelpCenter = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const faqs = {
    general: [
      {
        question: "What is MindEase?",
        answer: "MindEase is an AI-powered mental health support platform that provides immediate, confidential, and personalized emotional support through chat. Our goal is to make mental health support accessible to everyone, anytime they need it."
      },
      {
        question: "How does MindEase work?",
        answer: "MindEase uses advanced AI technology to understand your emotions and provide appropriate support. Simply start a conversation, express how you're feeling, and our AI will respond with empathy and understanding, offering support and guidance."
      },
      {
        question: "Is MindEase a replacement for professional therapy?",
        answer: "No, MindEase is not a replacement for professional therapy. While we provide emotional support and guidance, we recommend consulting with licensed mental health professionals for clinical diagnosis and treatment. MindEase is designed to complement professional care."
      }
    ],
    account: [
      {
        question: "How do I create an account?",
        answer: "To create an account, click on the 'Register' button in the navigation bar. You'll need to provide your name, email address, and create a password. After registration, you'll receive a confirmation email to verify your account."
      },
      {
        question: "How do I reset my password?",
        answer: "If you've forgotten your password, click on the 'Forgot Password' link on the login page. Enter your email address, and we'll send you instructions to reset your password."
      },
      {
        question: "Can I delete my account?",
        answer: "Yes, you can delete your account at any time. Go to Settings > Account Settings > Delete Account. Please note that this action cannot be undone, and all your data will be permanently removed."
      }
    ],
    privacy: [
      {
        question: "Is my conversation with MindEase private?",
        answer: "Yes, all conversations with MindEase are completely private and confidential. We use end-to-end encryption to protect your data, and we never share your conversations with third parties."
      },
      {
        question: "How is my data stored and protected?",
        answer: "Your data is stored securely using industry-standard encryption methods. We follow strict data protection regulations and regularly update our security measures to ensure your information remains safe."
      },
      {
        question: "Can I export my conversation history?",
        answer: "Yes, you can export your conversation history. Go to Settings > Privacy > Export Data to download your conversation history in a secure format."
      }
    ]
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Help Center</h1>
        
        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-blue-800 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="border-b border-blue-200 pb-4">
                <h3 className="text-lg font-medium text-blue-800 mb-2">How does MindEase work?</h3>
                <p className="text-gray-700">
                  MindEase uses AI technology to provide mental health support through chat. Simply start a conversation and our AI will respond with understanding and helpful guidance.
                </p>
              </div>
              <div className="border-b border-blue-200 pb-4">
                <h3 className="text-lg font-medium text-blue-800 mb-2">Is my conversation private?</h3>
                <p className="text-gray-700">
                  Yes, all conversations are completely private and confidential. We do not store or share your personal information.
                </p>
              </div>
              <div className="border-b border-blue-200 pb-4">
                <h3 className="text-lg font-medium text-blue-800 mb-2">How can I get the most out of MindEase?</h3>
                <p className="text-gray-700">
                  Be open and honest about your feelings. The more you share, the better our AI can understand and help you.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-blue-800 mb-4">Contact Support</h2>
            <p className="text-gray-700 mb-4">
              If you need additional help, please contact our support team.
            </p>
            <button
              className="px-4 py-2 bg-blue-200 hover:bg-blue-300 text-blue-800 rounded-lg transition-colors duration-300"
              onClick={() => window.location.href = 'mailto:support@mindease.com'}
            >
              Email Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter; 