// src/components/Category.js
import React from 'react';
import Widget from './Widget';
import Addingwidget from './Adddingwidget'

const Category=({ category })=> {
  return (
    <div>
      <h2>{category.name}</h2>
      {category.widgets.map(widget => (
        <Widget key={widget.id} widget={widget} categoryId={category.id} />
      ))}
      <Addingwidget categoryId={category.id} />
    </div>
  );
}

export default Category;
