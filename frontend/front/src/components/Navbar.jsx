import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/login');
  };

  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-sm mr-4">
          Schedule2Calander
              </Link>
        <div>
          {user ? (
            <button onClick={handleLogout} className="text-white text-sm mr-4 cursor-pointer">
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="text-white text-sm mr-4">
                Login
              </Link>
              <Link to="/signup" className="text-white text-sm mr-4">
                Signup
              </Link>
            </>
          )}
          <Link to="/extension" className="text-white text-sm">
            Extension Info
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
