import React from 'react';

function Header() {
  return (
    <header className="w-full max-w-screen-lg p-4 bg-gray-900 text-white flex justify-between items-center rounded-lg shadow-md">
      <h1 className="text-2xl font-bold">Food Menu App</h1>
      <input
        type="text"
        placeholder="Search..."
        className="p-2 w-1/2 max-w-xs rounded bg-gray-800 text-white placeholder-gray-400"
      />
    </header>
  );
}

export default Header;
