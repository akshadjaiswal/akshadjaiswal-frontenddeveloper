import React from 'react';
import ReactDOM from 'react-dom';

function Modal({ item, closeModal }) {
  return ReactDOM.createPortal(
    <div 
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" 
      onClick={closeModal} 
    >
      <div 
        className="bg-white p-6 rounded-lg max-w-lg w-full mx-4 relative" 
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the modal
      >
        <button 
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" 
          onClick={closeModal}
        >
          &#10005;
        </button>
        <h2 className="text-2xl font-bold mb-4">{item.strMeal}</h2>
        <img src={item.strMealThumb} alt={item.strMeal} className="w-full rounded mb-4"/>
        <p className="text-gray-700 mb-4">Additional details about {item.strMeal}.</p>
      </div>
    </div>,
    document.body // This renders the modal as a child of <body> instead of within the FoodItemCard
  );
}

export default Modal;
