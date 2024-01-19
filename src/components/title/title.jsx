// TitleBar.js
import React from 'react';

const TitleBar = ({ onSearch }) => {
  return (
    <div className="bg-gray-800 p-4 text-white">
      <h1 className="text-2xl font-bold">Music Player</h1>
      <input
        type="text"
        placeholder="Search..."
        className="border p-2 rounded"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default TitleBar;
