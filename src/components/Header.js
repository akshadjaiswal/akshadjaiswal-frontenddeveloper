import React from 'react';

function Header() {
  return (
    <header className="flex flex-col sm:flex-row items-center justify-between w-full p-4 bg-gray-900 text-white">
      <h1 className="text-xl sm:text-2xl font-bold">Food Menu App</h1>
      <input
        type="text"
        placeholder="Search..."
        className="w-full sm:w-auto mt-2 sm:mt-0 p-2 rounded bg-gray-800 text-white placeholder-gray-400"
      />
    </header>
  );
}

export default Header;
