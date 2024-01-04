import React from 'react';

const LeftBar = ({ songs }) => {
  return (
    <div className="w-1/5 p-4 border border-gray-300 rounded-lg">
      <h2 className="text-lg font-bold mb-4">Song List</h2>
      <ul>
        {songs?.map((song, index) => (
          <li key={index} className="mb-2">
            {song?.result?.title} - {song?.result?.artist_names}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftBar;
