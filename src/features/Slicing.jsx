// src/features/dashboardSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [
    {
      id: 'cspm_dashboard',
      name: 'CSPM Executive Dashboard',
      widgets: [
        { id: 'widget1', name: 'Widget 1', text: 'Random text for Widget 1' }
      ]
    },
    {
      id: 'another_dashboard',
      name: 'Another Dashboard',
      widgets: []
    }
  ]
};

const Slicing = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    addWidget: (state, action) => {
      const { categoryId, widget } = action.payload;
      const category = state.categories.find(c => c.id === categoryId);
      if (category) {
        category.widgets.push(widget);
      }
    },
    removeWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.categories.find(c => c.id === categoryId);
      if (category) {
        category.widgets = category.widgets.filter(w => w.id !== widgetId);
      }
    }
  }
});

export const { addWidget, removeWidget } = Slicing.actions;
export default Slicing.reducer;
