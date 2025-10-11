import React from 'react';
import { Link } from 'react-router-dom';

const Extension = () => {
  const steps = [
    'go to the chrome web store',
    "search for 'schedule extractor'",
    "click 'add to chrome' to install the extension",
    "once installed, click on the extension icon in the chrome toolbar",
    "log in with your account credentials",
    'navigate to the website from which you want to extract your schedule',
    "click the 'extract schedule' button in the extension popup",
    'view your extracted schedule on our platform and export it to google calendar',
    'enjoy managing your schedule with ease!',
  ];

  return (
    <div className="min-h-screen bg-gray-950 pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-light text-gray-100 mb-6">
            chrome extension
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            streamline your workflow with our browser extension. 
            extract schedules directly from suny websites with a single click.
          </p>
        </div>

        <div className="card animate-slide-up">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-light text-gray-100 mb-4">get started</h2>
            <p className="text-gray-400 leading-relaxed">
              our chrome extension helps you extract your schedule from various websites and view it on our platform. 
              you can also export your schedule to google calendar for easy access and management.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-medium text-gray-100 mb-6">steps to download and use the extension</h3>
            
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-800/30 transition-colors duration-200"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center border border-gray-700">
                    <span className="text-sm font-medium text-gray-300">{index + 1}</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link to="/" className="btn-secondary">
              back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extension;
