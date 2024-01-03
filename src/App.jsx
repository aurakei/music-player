import React from 'react';
import TitleComponent from './components/title/title';
import LeftBar from './components/leftbar/leftbar';
import NowPlayingCard from './components/cardList/nowPlayingCard';
import LyricsCard from './components/cardList/lyrics';
import backgroundImage from './images/wallbackground.jpg';

const App = () => {
  const songs = [
    {
      id: 1,
      title: 'Song 1',
      artist: 'Artist 1',
      lyrics: 'Lyrics for Song 1',
    },
    {
      id: 2,
      title: 'Song 2',
      artist: 'Artist 2',
      lyrics: 'Lyrics for Song 2',
    },
    // Add more songs as needed
  ];

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
        <LeftBar className="w-1/4" />

        {/* NowPlayingCard Component */}
        <NowPlayingCard className="w-1/2" />

        {/* LyricsCard Component */}
        <LyricsCard className="w-1/4" />
      </div>
    </div>
  );
};

export default App;
