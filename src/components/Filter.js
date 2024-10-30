import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Filter({ setSelectedArea }) {
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    const fetchAreas = async () => {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
    //   console.log(response)
      setAreas(response.data.meals.map(meal => meal.strArea));
    };
    fetchAreas();
  }, []);

  return (
    <div className="flex justify-center p-4 bg-gray-100">
      <select
        onChange={(e) => setSelectedArea(e.target.value)}
        className="p-3 rounded-lg bg-white shadow-sm text-gray-700 border-gray-300"
      >
        <option value="">Filter By Area</option>
        {areas.map((area, index) => (
          <option key={index} value={area}>{area}</option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
