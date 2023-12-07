// App.jsx

import React from 'react';
import TitleComponent from './components/title/title';
import LeftBar from './components/leftbar/leftbar';
import CardList from './components/cardList/cardList';
const App = () => {
  return (
    <div>
      <TitleComponent title="Musician" />
      <LeftBar />
      <CardList />
    </div>
  );
};

export default App;
