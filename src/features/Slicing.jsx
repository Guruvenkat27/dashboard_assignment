// src/features/Slicing.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [
    { id: 'cspm_dashboard', widgets: [] },
    { id: 'cwpp_dashboard', widgets: [] },
    // other categories...
  ],
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    addWidget: (state, action) => {
      const { categoryId, widget } = action.payload || {};
      const category = state.categories.find((c) => c.id === categoryId);
      if (category) {
        if (!category.widgets.find((w) => w.key === widget.key)) {
          category.widgets.push(widget);
        }
      }
    },
    removeWidget: (state, action) => {
      console.log('removeWidget action.payload:', action.payload);
      const { categoryId, widgetKey } = action.payload || {};
      const category = state.categories.find((c) => c.id === categoryId);
      if (category) {
        console.log('Category before removal:', category.widgets);
        category.widgets = category.widgets.filter((w) => w.key !== widgetKey);
        console.log('Category after removal:', category.widgets);
      }
    },
  },
});

export const { addWidget, removeWidget } = dashboardSlice.actions;
export default dashboardSlice.reducer;
