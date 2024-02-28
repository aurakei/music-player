// Homepage.jsx
import React, { useState } from "react";
import TitleComponent from "../components/title/title";
import cardList from "../components/cardList/cardList";

const Homepage = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  const artists = [
    {
      id: 1,
      imageSrc: "https://via.placeholder.com/180x180",
      artistName: "Ozuna",
      songName: "Ozuna, Maldy - Brabus",
    },
    // Add more artists as needed
  ];

  return (
    <div
      className="flex flex-col h-screen"
      style={{
        // backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <TitleComponent
        title="Musician"
        onSearch={handleSearchResults}
        className="w-full"
      />

      <div className="flex flex-1">
        <div className="w-full h-8 text-center text-zinc-800 text-xs font-thin font-['Inter'] leading-loose">
          Hear what’s trending for free in the SoundCloud community
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-wrap justify-center">
          {artists.map((artist) => (
            <cardList
              key={artist.id}
              imageSrc={artist.imageSrc}
              artistName={artist.artistName}
              songName={artist.songName}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
