import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Filter({ setSelectedArea }) {
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    const fetchAreas = async () => {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
      setAreas(response.data.meals.map(meal => meal.strArea));
    };
    fetchAreas();
  }, []);

  return (
    <div className="w-full max-w-screen-lg flex justify-center p-4">
      <select 
        onChange={(e) => setSelectedArea(e.target.value)} 
        className="w-full max-w-sm p-2 border border-gray-300 rounded bg-white shadow-sm"
      >
        {areas.map((area, index) => (
          <option key={index} value={area}>{area}</option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
