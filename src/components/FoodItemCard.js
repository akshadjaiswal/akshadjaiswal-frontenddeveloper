import React, { useState } from 'react';
import Modal from './Modal';

function FoodItemCard({ item }) {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition">
      <img src={item.strMealThumb} alt={item.strMeal} className="rounded-lg w-full h-40 object-cover"/>
      <h3 className="text-lg font-semibold mt-2">{item.strMeal}</h3>
      <p className="text-sm text-gray-500">⭐ {Math.floor(Math.random() * 5) + 1} stars</p>
      <button
        onClick={() => setShowModal(true)}
        className="mt-3 p-2 w-full text-center bg-orange-500 text-white rounded-lg"
      >
        View Details
      </button>
      
      {showModal && <Modal item={item} closeModal={() => setShowModal(false)} />}
    </div>
  );
}

export default FoodItemCard;
