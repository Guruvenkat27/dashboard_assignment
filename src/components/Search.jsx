// src/components/SearchWidget.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Search=()=> {
  const [query, setQuery] = useState('');
  const categories = useSelector(state => state.dashboard.categories);

  const searchResults = categories
    .flatMap(category => category.widgets)
    .filter(widget => widget.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Widgets"
      />
      <ul>
        {searchResults.map(widget => (
          <li key={widget.id}>{widget.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
