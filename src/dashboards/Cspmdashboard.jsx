// src/Dashboard.jsx
import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Sidebar from "../components/Sidebar";

// Register the chart components
ChartJS.register(ArcElement, Tooltip, Legend);

const Cspmdashboard = () => {
  // State to hold dynamically added widgets
  const [widgets, setWidgets] = useState([]);

  // State to control sidebar visibility
  const [showSidebar, setShowSidebar] = useState(false);

  // Default widget templates that can be added
  const defaultWidgets = [
    { name: "Widget 1", text: "This is the first default widget." },
    { name: "Widget 2", text: "This is the second default widget." },
    // Add more default widgets as needed
  ];

  // Sample data for the charts
  const cloudAccountsData = {
    labels: ["Connected", "Not Connected"],
    datasets: [
      {
        data: [2, 2],
        backgroundColor: ["#4a90e2", "#c4d8f3"],
        hoverBackgroundColor: ["#357ABD", "#B0C4DE"],
      },
    ],
  };

  const riskAssessmentData = {
    labels: ["Failed", "Warning", "Not available", "Passed"],
    datasets: [
      {
        data: [1689, 681, 36, 7253],
        backgroundColor: ["#f44336", "#ffeb3b", "#9e9e9e", "#4caf50"],
        hoverBackgroundColor: ["#d32f2f", "#fbc02d", "#616161", "#388e3c"],
      },
    ],
  };

  const options = {
    cutout: "65%",
    plugins: {
      legend: {
        display: false, // Disable legend for custom display
      },
    },
  };

  // Function to handle removing a widget
  const handleRemoveWidget = (index) => {
    const updatedWidgets = widgets.filter((_, i) => i !== index);
    setWidgets(updatedWidgets);
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard gap justify-center">
        <div className="widget">
          <h3 className="w-[100%] px-[15px] font-bold">Cloud Accounts</h3>
          <div className="flex h-[22vh] mt-4 justify-between px-[25px] items-center">
            <Doughnut data={cloudAccountsData} options={options} />
            <ul className="legend">
              <li>
                <span
                  className="legend-color"
                  style={{ backgroundColor: "#4a90e2" }}
                ></span>
                Connected (2)
              </li>
              <li>
                <span
                  className="legend-color"
                  style={{ backgroundColor: "#c4d8f3" }}
                ></span>
                Not Connected (2)
              </li>
            </ul>
          </div>
        </div>

        <div className="widget">
          <h3 className="font-bold w-[100%] px-[15px]">
            Cloud Account Risk Assessment
          </h3>
          <div className="flex h-[22vh] mt-6 justify-between px-[25px] items-center">
            <Doughnut data={riskAssessmentData} options={options} />
            <ul className="legend">
              <li>
                <span
                  className="legend-color"
                  style={{ backgroundColor: "#f44336" }}
                ></span>
                Failed (1689)
              </li>
              <li>
                <span
                  className="legend-color"
                  style={{ backgroundColor: "#ffeb3b" }}
                ></span>
                Warning (681)
              </li>
              <li>
                <span
                  className="legend-color"
                  style={{ backgroundColor: "#9e9e9e" }}
                ></span>
                Not available (36)
              </li>
              <li>
                <span
                  className="legend-color"
                  style={{ backgroundColor: "#4caf50" }}
                ></span>
                Passed (7253)
              </li>
            </ul>
          </div>
        </div>

        {widgets.map((widget, index) => (
          <div className="widget" key={index}>
            <div className="flex justify-between items-center">
              <h3 className="font-bold">{widget.name}</h3>
              <button
                className="remove-widget-button"
                onClick={() => handleRemoveWidget(index)}
              >
                ✖
              </button>
            </div>
            <p>{widget.text}</p>
          </div>
        ))}

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
          defaultWidgets={defaultWidgets}
          onConfirm={(selectedWidgets) => {
            setWidgets([...widgets, ...selectedWidgets]);
            setShowSidebar(false);
          }}
          onCancel={() => setShowSidebar(false)}
        />
      )}
    </div>
  );
};

export default Cspmdashboard;
