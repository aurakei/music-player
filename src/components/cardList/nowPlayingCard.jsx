// NowPlaying.js
import React from 'react';

const NowPlaying = ({ song }) => {
  return (
    <div className="bg-gray-300 p-4">
      <h2 className="text-lg font-semibold">Now Playing</h2>
      {song ? <p className="text-gray-600">{song.title}</p> : <p className="text-gray-600">No song selected</p>}
    </div>
  );
};

export default NowPlaying;
