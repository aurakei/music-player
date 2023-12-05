// App.jsx

import React from 'react';
import TitleComponent from './components/title/title';
import LeftBar from './components/leftbar/leftbar';
const App = () => {
  return (
    <div>
      <TitleComponent title="Musician" />
      <LeftBar />
    </div>
  );
};

export default App;
