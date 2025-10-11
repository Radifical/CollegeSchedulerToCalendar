import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/login');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-gray-100 text-lg font-medium hover:text-white transition-colors duration-200">
            schedule2calendar
          </Link>
          
          <div className="flex items-center space-x-8">
            {user ? (
              <button 
                onClick={handleLogout} 
                className="btn-ghost text-sm"
              >
                logout
              </button>
            ) : (
              <>
                <Link to="/login" className="btn-ghost text-sm">
                  login
                </Link>
                <Link to="/signup" className="btn-secondary text-sm">
                  signup
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
