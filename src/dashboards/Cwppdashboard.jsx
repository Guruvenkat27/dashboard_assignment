import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // Import useDispatch from React-Redux
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import { Cwpmdata } from '../Data/Data';
import Sidebar from '../components/Sidebar';
import { addWidget } from '../features/Slicing'; // Import the action to add a widget

// Register necessary components
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const Cwppdashboard = () => {
  const dispatch = useDispatch(); // Initialize the useDispatch hook
  const [showSidebar, setShowSidebar] = useState(false);
  const [selectedWidgets, setSelectedWidgets] = useState([]); // Store confirmed widget data

  const handleConfirm = (widgets) => {
    widgets.forEach((widget) => {
      dispatch(addWidget(widget)); // Dispatch the action to add a widget to the Redux store
    });
    setSelectedWidgets(widgets); // Update the state with the confirmed widgets
    setShowSidebar(false); // Close the sidebar after confirmation
  };

  return (
    <div className="dashboard-container mt-8">
      <h1 className="font-bold text-sm px-16">CWPP Dashboard</h1>
      <div className="dashboard flex gap-6">
        <div className="widget">
          <h3 className="font-bold mb-2">Top 5 Namespace Specific Alerts</h3>
          <Bar
            data={Cwpmdata.namespaceAlertsData}
            options={{
              responsive: true,
              plugins: {
                legend: { position: 'top' },
                title: { display: true, text: 'Namespace Alerts' },
              },
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />
        </div>

        <div className="widget">
          <h3 className="font-bold mb-2">Workload Alerts</h3>
          <Bar
            data={Cwpmdata.workloadAlertsData}
            options={{
              responsive: true,
              plugins: {
                legend: { position: 'top' },
                title: { display: true, text: 'Workload Alerts' },
              },
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />
        </div>
  {/* Render dynamically added widgets */}
  {selectedWidgets.map(({ key, data }) => (
        <div key={key} className="widget">
          <h3 className="font-bold mb-2">{key}</h3>
          <Bar
            data={data}
            options={{
              responsive: true,
              plugins: {
                legend: { position: 'top' },
                title: { display: true, text: key },
              },
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />
        </div>
      ))}
        {/* Add Widget Button */}
        <div className="widget add-widget">
          <button
            className="add-widget-button"
            onClick={() => setShowSidebar(true)}
          >
            + Add Widget
          </button>
        </div>
      </div>

      {/* Sidebar for adding widgets */}
      {showSidebar && (
        <Sidebar
          onConfirm={handleConfirm} // Pass the confirm handler to the Sidebar
          onCancel={() => setShowSidebar(false)}
        />
      )}

    
    </div>
  );
};

export default Cwppdashboard;
