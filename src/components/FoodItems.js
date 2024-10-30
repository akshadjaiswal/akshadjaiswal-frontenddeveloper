import React from 'react';
import FoodItemCard from './FoodItemCard';

function FoodItems({ foodItems }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-full">
      {foodItems.map((item) => (
        <FoodItemCard key={item.idMeal} item={item} />
      ))}
    </div>
  );
}

export default FoodItems;
