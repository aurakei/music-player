// LeftBar.jsx
import React from 'react';

const LeftBar = ({ songs }) => {
  return (
    <div className="w-1/5 p-4 border border-gray-300 rounded-lg">
      <h2 className="text-lg font-bold mb-4">Song List</h2>
      <ul>
        {Array.isArray(songs) && songs.length > 0 ? (
          songs.map((song, index) => (
            <li key={index} className="mb-2">
              {song.title} - {song.artist}
            </li>
          ))
        ) : (
          <li>No songs available</li>
        )}
      </ul>
    </div>
  );
};

export default LeftBar;
