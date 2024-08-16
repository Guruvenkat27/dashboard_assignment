// src/components/Dashboard.js
import React from 'react';
import { useSelector } from 'react-redux';
import Category from './Category';
import Cspmdashboard from '../dashboards/Cspmdashboard';
import Cwppdashboard from '../dashboards/Cwppdashboard';


const Dashboard=()=> {
  const categories = useSelector(state => state.dashboard.categories);

  return (
    <div>
     <Cspmdashboard />
     <Cwppdashboard />
      {/* {categories.map(category => (
        <Category key={category.id} category={category} />
      ))} */}
    </div>
  );
}

export default Dashboard;
