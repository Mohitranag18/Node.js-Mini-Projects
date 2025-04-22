import React, { useState } from 'react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { IoIosAddCircleOutline } from 'react-icons/io';

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    // Add optional theme toggle logic here (e.g., document.body.classList)
  };

  return (
    <nav className={`w-full px-6 py-4 flex justify-between items-center shadow-md ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}>
      {/* Logo / Home */}
      <a href="/" className="text-lg font-bold tracking-wide hover:opacity-90">
        <div className="px-3 py-1 border-2 rounded-lg border-current">ProductHub</div>
      </a>

      {/* Action buttons */}
      <div className="flex items-center gap-4">
        {/* Create page link */}
        <a href="/create" title="Create Product" className="hover:text-yellow-500 transition-colors">
          <IoIosAddCircleOutline className="text-3xl" />
        </a>

        {/* Dark mode toggle */}
        <button onClick={toggleMode} title="Toggle Theme" className="focus:outline-none">
          {isDarkMode ? (
            <MdLightMode className="text-2xl hover:text-yellow-400 transition-colors" />
          ) : (
            <MdDarkMode className="text-2xl hover:text-gray-800 transition-colors" />
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
