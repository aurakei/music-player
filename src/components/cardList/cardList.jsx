// ArtistCard.jsx
import React from 'react';

const cardList = ({ imageSrc, artistName, songName }) => {
  return (
    <div className="flex flex-col items-center w-40 m-4">
      <div className="w-40 h-40 bg-gradient-to-br from-red-400 to-stone-500 flex justify-center items-center">
        <img
          className="w-36 h-36 shadow-inner"
          src={imageSrc}
          alt={`Image of ${artistName}`}
        />
      </div>
      <div className="mt-2 text-center">
        <p className="text-neutral-400 text-xs font-thin font-['Inter']">{artistName}</p>
        <p className="text-zinc-800 text-sm font-thin font-['Inter'] leading-tight">{songName}</p>
      </div>
    </div>
  );
};

export default cardList;
