import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Filter from './components/Filter';
import FoodItems from './components/FoodItems';
import Footer from './components/Footer';
import axios from 'axios';

function App() {
  const [foodItems, setFoodItems] = useState([]);
  const [selectedArea, setSelectedArea] = useState('Indian');

  useEffect(() => {
    fetchFoodItems(selectedArea);
  }, [selectedArea]);

  const fetchFoodItems = async (area) => {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
    setFoodItems(response.data.meals);
  };

  return (
    <div className="App flex flex-col items-center p-4 sm:p-8 lg:p-16 bg-gray-100 min-h-screen">
      <Header />
      <Filter setSelectedArea={setSelectedArea} />
      <FoodItems foodItems={foodItems} />
      <Footer />
    </div>
  );
}

export default App;
