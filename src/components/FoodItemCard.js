import React, { useState } from 'react';
import Modal from './Modal';

function FoodItemCard({ item }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105">
      <img 
        src={item.strMealThumb} 
        alt={item.strMeal} 
        className="w-full h-40 sm:h-48 object-cover rounded-t-lg" 
      />

      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 truncate">{item.strMeal}</h3>
        <div className="flex items-center text-yellow-500 my-2">
          {Array(Math.floor(Math.random() * 5) + 1).fill(0).map((_, index) => (
            <svg key={index} className="h-4 w-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 .587l3.668 7.568L24 9.423l-6 5.853L19.335 24 12 20.053 4.665 24 6 15.276 0 9.423l8.332-1.268L12 .587z"/>
            </svg>
          ))}
        </div>
        <button 
          onClick={() => setShowModal(true)} 
          className="mt-2 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 w-full"
        >
          View Details
        </button>
      </div>

      {/* Show Modal if `showModal` is true */}
      {showModal && <Modal item={item} closeModal={() => setShowModal(false)} />}
    </div>
  );
}

export default FoodItemCard;
