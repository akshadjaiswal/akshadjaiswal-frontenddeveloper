import React from 'react';
import FoodItemCard from './FoodItemCard';

function FoodItems({ foodItems }) {
  return (
    <div className="w-full max-w-screen-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {foodItems.map((item) => (
        <FoodItemCard key={item.idMeal} item={item} />
      ))}
    </div>
  );
}

export default FoodItems;
