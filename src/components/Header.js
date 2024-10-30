import React from 'react';

function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-orange-500 text-white shadow-md">
      <div className="text-2xl font-bold">Swiggy</div>
      <div className="flex items-center bg-white rounded-full p-2 shadow-sm w-1/2">
        <input
          type="text"
          placeholder="Search for dishes or cuisines..."
          className="flex-grow p-2 rounded-l-full outline-none text-gray-700"
        />
        <button className="bg-orange-500 text-white px-4 py-2 rounded-r-full">Search</button>
      </div>
    </header>
  );
}

export default Header;
