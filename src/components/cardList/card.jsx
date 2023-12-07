import React from "react";

const Card = ({ title, artist, lyrics }) => {
  return (
    <div className="song-card">
      <h2 className="song-title">{title}</h2>
      <p className="artist">Artist: {artist}</p>
      <p className="lyrics">{lyrics}</p>
    </div>
  );
};

export default Card;
