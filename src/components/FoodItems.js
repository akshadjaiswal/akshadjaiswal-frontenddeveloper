import React from 'react';
import FoodItemCard from './FoodItemCard';

function FoodItems({ foodItems }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 p-6 bg-gray-50">
      {foodItems.map((item) => (
        <FoodItemCard key={item.idMeal} item={item} />
      ))}
    </div>
  );
}

export default FoodItems;
