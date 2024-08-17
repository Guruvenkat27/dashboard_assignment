import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import { Cwpmdata } from '../Data/Data';
import Sidebar from '../components/Sidebar';
import { addWidget, removeWidget } from '../features/Slicing';

// Register necessary components
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const Cwppdashboard = () => {
  const dispatch = useDispatch();
  const [showSidebar, setShowSidebar] = useState(false);
  const [selectedWidgets, setSelectedWidgets] = useState([]);
  const [activeWidgetType, setActiveWidgetType] = useState(''); // Manage active widget type

  // Select widgets from the state (ensure they are correctly managed in the Redux store)
  const widgets = useSelector((state) => 
    state.dashboard.categories.find((c) => c.id === 'cwpp_dashboard')?.widgets || []
  );

  // Update selected widgets based on Redux store
  React.useEffect(() => {
    setSelectedWidgets(widgets);
  }, [widgets]);

  const handleConfirm = (widgets) => {
    widgets.forEach((widget) => {
      dispatch(addWidget({ categoryId: 'cwpp_dashboard', widget }));
    });
    setSelectedWidgets(widgets);
    setShowSidebar(false);
  };

  const handleAddWidgetClick = () => {
    setActiveWidgetType('CWPP'); // Set active widget type to CWPP
    setShowSidebar(true); // Show the sidebar
  };

  const handleRemoveWidget = (key) => {
    console.log('Dispatching removeWidget with payload:', { categoryId: 'cwpp_dashboard', widgetKey: key });
    dispatch(removeWidget({ categoryId: 'cwpp_dashboard', widgetKey: key }));
    setSelectedWidgets((prevWidgets) => prevWidgets.filter((widget) => widget.key !== key));
  };

  console.log('Selected Widgets:', selectedWidgets);

  return (
    <div className="dashboard-container mt-8">
      <h1 className="font-bold text-sm px-16">CWPP Dashboard</h1>
      <div className="dashboard flex gap-6">
        <div className="widget ">
          <h3 className="font-bold mb-2">Top 5 Namespace Specific Alerts</h3>
          <Bar
            data={Cwpmdata.namespaceAlertsData || { labels: [], datasets: [] }}
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
            data={Cwpmdata.workloadAlertsData || { labels: [], datasets: [] }}
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

        {selectedWidgets.map((widget) => (
          <div key={widget.key} className="widget relative p border rounded shadow-md">
            <div className="flex justify-between items-center">
              <h3 className="font-bold">{widget.key}</h3>
              <button
                className="remove-widget-button"
                onClick={() => handleRemoveWidget(widget.key)} // Correctly reference widget.key
              >
                ✖
              </button>
            </div>
            <Bar
              data={Cwpmdata[widget.key] || { labels: [], datasets: [] }}
              options={{
                responsive: true,
                plugins: {
                  legend: { position: 'top' },
                  title: { display: true, text: widget.key },
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

        <div className="widget add-widget">
          <button
            className="add-widget-button"
            onClick={handleAddWidgetClick} // Call the handler
          >
            + Add Widget
          </button>
        </div>
      </div>

      {showSidebar && (
        <Sidebar
          activeWidgetType={activeWidgetType} // Pass active widget type to Sidebar
          onConfirm={handleConfirm}
          onCancel={() => setShowSidebar(false)}
        />
      )}
    </div>
  );
};

export default Cwppdashboard;
