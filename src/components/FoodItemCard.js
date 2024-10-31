import React, { useState } from 'react';
import Modal from './Modal';

function FoodItemCard({ item }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 w-full max-w-xs sm:max-w-sm">
      {/* Food Image */}
      <img 
        src={item.strMealThumb} 
        alt={item.strMeal} 
        className="w-full h-40 sm:h-48 object-cover" 
      />

      {/* Food Item Details */}
      <div className="p-4 flex flex-col space-y-2">
        <h3 className="text-lg font-bold text-gray-800 truncate">{item.strMeal}</h3>
        
        {/* Ratings Section */}
        <div className="flex items-center text-yellow-500">
          {Array(Math.floor(Math.random() * 5) + 1).fill(0).map((_, index) => (
            <svg key={index} className="h-4 w-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 .587l3.668 7.568L24 9.423l-6 5.853L19.335 24 12 20.053 4.665 24 6 15.276 0 9.423l8.332-1.268L12 .587z"/>
            </svg>
          ))}
        </div>

        {/* Details Button */}
        <button 
          onClick={() => setShowModal(true)} 
          className="mt-2 p-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition w-full"
        >
          View Details
        </button>
      </div>

      {/* Modal for Details */}
      {showModal && <Modal item={item} closeModal={() => setShowModal(false)} />}
    </div>
  );
}

export default FoodItemCard;
