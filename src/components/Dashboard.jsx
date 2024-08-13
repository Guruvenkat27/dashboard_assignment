// src/components/Dashboard.js
import React from 'react';
import { useSelector } from 'react-redux';
import Category from './Category';

const Dashboard=()=> {
  const categories = useSelector(state => state.dashboard.categories);

  return (
    <div>
      {categories.map(category => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
}

export default Dashboard;
