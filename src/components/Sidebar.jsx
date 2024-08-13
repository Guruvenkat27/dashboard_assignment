// src/AddWidgetSidebar.jsx
import React, { useState } from "react";

const Sidebar = ({ defaultWidgets, onConfirm, onCancel }) => {
  // State for selected widgets
  const [selectedWidgets, setSelectedWidgets] = useState([]);

  // Function to handle toggling widget selection
  const toggleWidgetSelection = (widget) => {
    setSelectedWidgets((prevSelected) =>
      prevSelected.includes(widget)
        ? prevSelected.filter((w) => w !== widget)
        : [...prevSelected, widget]
    );
  };

  return (
    <div className="sidebar">
        <div className="bg-blue-900 flex items-center justify-between text-white px-7 py-2"><span>Add Widget</span> <span className="cursor-pointer" onClick={onCancel}>X</span> </div>
      <div className="sidebar-content">
        <h3 className="px-4 py-3">Personalize your dashboard by adding the following widget</h3>
        <div className="tabs">
          <button className="tab active">CSPM</button>
          <button className="tab">CWPP</button>
          <button className="tab">Image</button>
          <button className="tab">Ticket</button>
        </div>
        <ul className="px-5 flex flex-col gap-3">
          {defaultWidgets.map((widget, index) => (
            <li key={index} className="sidebar-list">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedWidgets.includes(widget)}
                  onChange={() => toggleWidgetSelection(widget)}
                />
                {widget.name}
              </label>
            </li>
          ))}
        </ul>
       
      </div>
      <div className="sidebar-footer">
          <button onClick={onCancel}>Cancel</button>
          <button onClick={() => onConfirm(selectedWidgets)}>Confirm</button>
        </div>
    </div>
  );
};

export default Sidebar;
