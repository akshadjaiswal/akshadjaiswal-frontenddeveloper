import React from 'react';

function Modal({ item, closeModal }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg max-w-md shadow-lg">
        <button onClick={closeModal} className="float-right text-gray-500">✕</button>
        <h2 className="text-2xl font-bold mb-4">{item.strMeal}</h2>
        <img src={item.strMealThumb} alt={item.strMeal} className="rounded-lg w-full" />
        <p className="mt-4">Description: Delicious {item.strMeal} from {item.strArea} cuisine.</p>
        <button
          onClick={closeModal}
          className="mt-4 w-full bg-orange-500 text-white py-2 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
