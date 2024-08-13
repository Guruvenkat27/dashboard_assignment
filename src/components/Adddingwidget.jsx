// src/components/AddWidgetForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWidget } from '../features/Slicing';

const Addingwidget=({ categoryId })=> {
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    const widget = {
      id: `widget${Date.now()}`,
      name: widgetName,
      text: widgetText
    };
    dispatch(addWidget({ categoryId, widget }));
    setWidgetName('');
    setWidgetText('');
  };

  return (
    <div>
      <input
        value={widgetName}
        onChange={(e) => setWidgetName(e.target.value)}
        placeholder="Widget Name"
      />
      <input
        value={widgetText}
        onChange={(e) => setWidgetText(e.target.value)}
        placeholder="Widget Text"
      />
      <button onClick={handleAdd}>Add Widget</button>
    </div>
  );
}

export default Addingwidget;
