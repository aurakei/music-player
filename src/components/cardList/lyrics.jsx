// LyricsCard.js

import React from 'react';

const LyricsCard = () => {
  return (
    <div className="flex items-center justify-end h-screen-80 bg-gray-200 p-8">
      <div className="max-w-md">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-4">Song Title</h2>
        {/* Lyrics */}
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          ultricies tincidunt ex, non elementum purus efficitur vel. ...
        </p>
      </div>
    </div>
  );
};

export default LyricsCard;
