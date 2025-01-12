import React, { useState, useEffect } from 'react';
import './ThingsToDo.css';

function ThingsToDo() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('/api/ThingsToDo')
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched data:', data); // 输出获取的数据
        setCategories(Object.entries(data));
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="things-to-do">
      <h2>Things to Do in Penang</h2>
      {categories.map(([category, items]) => (
        <div key={category} className="category-section">
          <h3>{category}</h3>
          <div className="category-grid">
            {items.map((item) => (
              <div key={item.slug} className="category-card">
                <img src={item.media} alt={item.name} />
                <h4>{item.name}</h4>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ThingsToDo;
