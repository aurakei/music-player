// App.jsx

import React from 'react';
import TitleComponent from './components/title/title';
import LeftBar from './components/leftbar/leftbar';
// import CardList from './components/cardList/cardList';
import NowPlayingCard from './components/cardList/nowPlayingCard';
import LyricsCard from './components/cardList/lyrics';

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
    <div className="flex flex-col h-screen">
      <TitleComponent title="Musician" />

      <div className="flex flex-1">
        <LeftBar />
        <NowPlayingCard />
        <LyricsCard />
      </div>
      {/* <CardList songs={songs} /> */}
    </div>
  );
};

export default App;
