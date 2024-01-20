// NowPlaying.js
import React from 'react';

const NowPlaying = ({ song }) => {
  return (
    <div className="w-[50%] p-7">
      <h2 className="text-lg font-semibold">Now Playing</h2>
      {song ? <p className="text-gray-600">{song.title}</p> : <p className="text-gray-600">No song selected</p>}
    </div>
  );
};

export default NowPlaying;
