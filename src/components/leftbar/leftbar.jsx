// LeftBar.jsx

import React from 'react';

const LeftBar = () => {
  // List of songs
  const songs = [
    'Let You Love Me',
    'Mapema',
    'Halleluya',
    'Give Me Jesus',
    'Usifiwe',
    'Let You Love Me',
    'Mapema',
    'Halleluya',
    'Give Me Jesus',
    'Usifiwe',
  ];

  return (
    <div className="w-1/5 bg-gray-200 p-4 border border-gray-300 rounded-lg">
      <h2 className="text-lg font-bold mb-4">Song List</h2>
      <ul>
        {songs.map((song, index) => (
          <li key={index} className="mb-2">
            {song}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftBar;
