import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Confetti from './Confetti';

const Home = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const scrollToInstructions = () => {
    document.getElementById('instructions').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  useEffect(() => {
    // Trigger confetti animation on page load
    const timer = setTimeout(() => {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950">
      <Confetti active={showConfetti} />
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-light text-gray-100 mb-6 leading-tight">
              export your schedule
              <br />
              <span className="gradient-text">effortlessly</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              seamlessly convert your college schedule to google calendar with just a few clicks. 
              no more manual entry, no more missed classes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/signup" className="btn-primary text-lg px-8 py-4 hover-lift">
                get started
              </Link>
              <button 
                onClick={scrollToInstructions}
                className="btn-secondary text-lg px-8 py-4 hover-lift"
              >
                how it works
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-light text-gray-100 mb-4">we get it, you're busy</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              every semester, the same tedious task awaits
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Problem Description */}
            <div className="animate-slide-up">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-600 to-orange-600 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">😫</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-100 mb-2">manual schedule entry</h3>
                    <p className="text-gray-400 leading-relaxed">
                      copying each class one by one, entering times, locations, and details manually
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-600 to-amber-600 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">⏰</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-100 mb-2">30 minutes to 1 hour</h3>
                    <p className="text-gray-400 leading-relaxed">
                      wasted at the beginning of every semester on tedious data entry
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">📚</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-100 mb-2">for organized students</h3>
                    <p className="text-gray-400 leading-relaxed">
                      who want everything perfectly structured in their google calendar
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Problem Representation */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="card hover-lift hover-glow">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl mb-4">
                    <span className="text-2xl">🗓️</span>
                  </div>
                  <h3 className="text-lg font-medium text-gray-100 mb-2">the old way</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                    <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                    <span className="text-gray-300 text-sm">copy course name from suny portal</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                    <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-300 text-sm">manually enter start/end times</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                    <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                    <span className="text-gray-300 text-sm">type in room number and building</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    <span className="text-gray-300 text-sm">repeat for every single class</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-300 text-sm">double-check for typos and errors</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-700">
                  <div className="text-center">
                    <div className="text-2xl font-light text-red-400 mb-1">30-60 min</div>
                    <div className="text-sm text-gray-500">of repetitive work</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Transition to Solution */}
          <div className="text-center mt-16 animate-fade-in">
            <div className="inline-flex items-center space-x-4 text-gray-400">
              <div className="w-8 h-px bg-gray-600"></div>
              <span className="text-sm uppercase tracking-wide">there's a better way</span>
              <div className="w-8 h-px bg-gray-600"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="instructions" className="py-20 px-6 bg-gray-900/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl font-light text-gray-100 mb-4">how it works</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              three simple steps to transform your schedule
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="card hover-lift hover-glow animate-slide-up">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center border border-gray-700">
                  <span className="text-2xl">📋</span>
                </div>
                <h3 className="text-xl font-medium text-gray-100 mb-3">copy your suny schedule</h3>
                <p className="text-gray-400 leading-relaxed">
                  grab your schedule from your suny student portal and copy the text
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="card hover-lift hover-glow animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center border border-gray-700">
                  <span className="text-2xl">📝</span>
                </div>
                <h3 className="text-xl font-medium text-gray-100 mb-3">paste it here</h3>
                <p className="text-gray-400 leading-relaxed">
                  paste your schedule into our intelligent parser and watch it transform
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="card hover-lift hover-glow animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center border border-gray-700">
                  <span className="text-2xl">📅</span>
                </div>
                <h3 className="text-xl font-medium text-gray-100 mb-3">export to google calendar</h3>
                <p className="text-gray-400 leading-relaxed">
                  one click exports all your classes to google calendar with proper formatting
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chrome Extension Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="card text-center">
            <div className="animate-scale-in">
              <h2 className="text-3xl font-light text-gray-100 mb-6">chrome extension available</h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                streamline the process even further with our browser extension. 
                extract schedules directly from suny websites with a single click.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm">install from chrome web store</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm">navigate to your suny schedule page</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm">click extract schedule button</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm">view parsed schedule instantly</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm">export directly to google calendar</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm">enjoy seamless schedule management</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/extension" className="btn-secondary">
                  learn more about extension
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-light text-gray-100 mb-4">making an impact</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              trusted by students across the suny system
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Stats */}
            <div className="space-y-8 animate-slide-up">
              <div className="text-center md:text-left">
                <div className="text-4xl md:text-5xl font-light text-gray-100 mb-2 gradient-text">
                  1000+
                </div>
                <div className="text-lg text-gray-400 mb-1">students helped</div>
                <div className="text-sm text-gray-500">and counting</div>
              </div>

              <div className="text-center md:text-left">
                <div className="text-4xl md:text-5xl font-light text-gray-100 mb-2 gradient-text">
                  7
                </div>
                <div className="text-lg text-gray-400 mb-1">suny campuses</div>
                <div className="text-sm text-gray-500">across new york state</div>
              </div>

              <div className="text-center md:text-left">
                <div className="text-4xl md:text-5xl font-light text-gray-100 mb-2 gradient-text">
                  5000+
                </div>
                <div className="text-lg text-gray-400 mb-1">schedules exported</div>
                <div className="text-sm text-gray-500">to google calendar</div>
              </div>
            </div>

            {/* News Feature */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="card hover-lift hover-glow">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-4">
                    <span className="text-2xl">📰</span>
                  </div>
                  <h3 className="text-xl font-medium text-gray-100 mb-2">featured in the news</h3>
                  <p className="text-gray-400 text-sm">suny broome community college</p>
                </div>

                <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 p-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
                  <div className="relative">
                    <div className="text-xs text-gray-400 mb-2 uppercase tracking-wide">oct 9, 2024</div>
                    <h4 className="text-lg font-medium text-gray-100 mb-3 leading-tight">
                      suny broome student launches schedule2calendar to simplify academic planning
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      "suny broome students now have a new tool to keep their academic schedules organized, 
                      thanks to the innovative work of computer science student radif rahman..."
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">the buzz • hivehq</span>
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <a 
                    href="https://www.sunybroome.edu/buzz/suny-broome-student-launches-schedule2calendar-to-simplify-academic-planning/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm"
                  >
                    read full article
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Campus List */}
          <div className="mt-16 text-center animate-fade-in">
            <h3 className="text-lg font-medium text-gray-300 mb-6">trusted by students at</h3>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <span className="px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700">suny broome</span>
              <span className="px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700">suny binghamton</span>
              <span className="px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700">suny buffalo</span>
              <span className="px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700">suny albany</span>
              <span className="px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700">suny stony brook</span>
              <span className="px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700">suny oswego</span>
              <span className="px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700">suny geneseo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800/50 py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-sm text-gray-500 mb-4">
            render downtime notice • schedule2calendar is hosted on render with occasional maintenance windows
          </div>
          
          <div className="flex justify-center space-x-6 text-sm">
            <a 
              href="https://github.com" 
              className="text-gray-400 hover:text-gray-200 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
            <Link 
              to="/privacy" 
              className="text-gray-400 hover:text-gray-200 transition-colors duration-200"
            >
              privacy
            </Link>
            <a 
              href="/terms" 
              className="text-gray-400 hover:text-gray-200 transition-colors duration-200"
            >
              terms
            </a>
          </div>
          
          <div className="mt-6 text-xs text-gray-600">
            © 2024 schedule2calendar. built for suny students, by students.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;