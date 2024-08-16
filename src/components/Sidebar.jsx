import React, { useState } from 'react';
import { Cspmdata, Cwpmdata } from '../Data/Data';

const Sidebar = ({ onConfirm, onCancel }) => {
  const [selectedWidgets, setSelectedWidgets] = useState([]);
  const [activeTab, setActiveTab] = useState('CSPM');

  const toggleWidgetSelection = (key) => {
    setSelectedWidgets((prevSelected) =>
      prevSelected.includes(key)
        ? prevSelected.filter((item) => item !== key)
        : [...prevSelected, key]
    );
  };

  const tabs = [
    { name: 'CSPM', dataKey: 'Cspmdata' },
    { name: 'CWPP', dataKey: 'Cwpmdata' },
  ];

  const getData = (tabName) => {
    switch (tabName) {
      case 'CSPM':
        return Cspmdata;
      case 'CWPP':
        return Cwpmdata;
      default:
        return {};
    }
  };

  const currentData = getData(activeTab);
  const dataKeys = Object.keys(currentData);

  return (
    <div className="sidebar">
      <div className="bg-blue-900 flex items-center justify-between text-white px-7 py-2">
        <span>Add Widget</span>
        <span className="cursor-pointer" onClick={onCancel}>X</span>
      </div>
      <div className="sidebar-content">
        <h3 className="px-4 py-3">Personalize your dashboard by adding the following widget</h3>
        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              className={`tab ${activeTab === tab.name ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.name)}
            >
              {tab.name}
            </button>
          ))}
        </div>
        <ul className="px-5 flex flex-col gap-3">
          {dataKeys.length > 0 ? (
            dataKeys.map((key) => (
              <li key={key} className="sidebar-list">
                <div className="widget-group flex gap-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedWidgets.includes(key)}
                      onChange={() => toggleWidgetSelection(key)}
                    />
                    <h4 className="font-bold">{key}</h4>
                  </label>
                </div>
              </li>
            ))
          ) : (
            <li className="sidebar-list">No data available</li>
          )}
        </ul>
      </div>
      <div className="sidebar-footer">
        <button onClick={onCancel}>Cancel</button>
        <button onClick={() => onConfirm(selectedWidgets.map(key => ({ key, data: currentData[key] })))}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
