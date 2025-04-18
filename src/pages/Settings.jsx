import React, { useState } from 'react';
import AnimatedBackground from '../components/AnimatedBackground';

const Settings = () => {
  const [notifications, setNotifications] = useState(false);

  const toggleNotifications = () => {
    setNotifications(!notifications);
  };

  return (
    <div className="min-h-screen bg-white relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-blue-800 mb-8">Settings</h1>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-blue-800 mb-4">Notifications</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    <span className="text-blue-700">Email Notifications</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={notifications}
                      onChange={toggleNotifications}
                    />
                    <div className="w-11 h-6 bg-blue-100 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-blue-200 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-200"></div>
                  </label>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-blue-800 mb-4">Account</h2>
              <div className="space-y-4">
                <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md text-blue-800 bg-blue-100 hover:bg-blue-200 transition-colors duration-300">
                  Change Password
                </button>
                <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md text-red-800 bg-red-100 hover:bg-red-200 transition-colors duration-300">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings; 