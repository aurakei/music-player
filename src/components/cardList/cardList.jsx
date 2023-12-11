// CardList.jsx

import React from 'react';
import Card from './card';

const CardList = ({ songs }) => {
  return (
    <div className="card-list">
      {songs.map((song) => (
        <Card
          key={song.id}
          title={song.title}
          artist={song.artist}
          lyrics={song.lyrics}
        />
      ))}
    </div>
  );
};

export default CardList;
