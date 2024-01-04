import React, { useState} from 'react';
import TitleComponent from './components/title/title';
import LeftBar from './components/leftbar/leftbar';
import NowPlayingCard from './components/cardList/nowPlayingCard';
import LyricsCard from './components/cardList/lyrics';
import backgroundImage from './images/wallbackground.jpg';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <div
      className="flex flex-col h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover', // Ensure the background image covers the entire screen
      }}
    >
      {/* Title Component */}
      <TitleComponent title="Musician" className="w-full" />

      <div className="flex flex-1">
        {/* LeftBar Component */}
        <LeftBar songs={searchResults} className="w-1/4" />

        {/* NowPlayingCard Component */}
        <NowPlayingCard className="w-1/2" />

        {/* LyricsCard Component */}
        <LyricsCard className="w-1/4" />
      </div>
    </div>
  );
};

export default App;
