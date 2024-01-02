// LyricsCard.jsx

import React from 'react';

const LyricsCard = () => {
  return (
    <div className="LyricsCard w-1/4 p-4 border border-gray-300 rounded-lg">
      {/* Title */}
      <h2 className="text-xl font-bold mb-2">Song Title</h2>

      {/* Lyrics (Dummy Text) */}
      <p className="text-gray-800">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        ultricies tincidunt ex, non elementum purus efficitur vel. Vestibulum
        ultricies luctus leo, at tincidunt velit tempor non.
      </p>
    </div>
  );
};

export default LyricsCard;
