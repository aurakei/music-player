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
  {/* <CardList songs={songs} /> */}
</div>

  );
};

export default App;
