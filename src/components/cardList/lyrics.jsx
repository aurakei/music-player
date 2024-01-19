// RightComponent.js
import React from 'react';

const RightComponent = ({ lyrics }) => {
  return (
    <div className="bg-gray-200 p-4 w-1/4">
      <div className="mb-4">Right Top</div>
      <div className="mb-4">Lyrics: {lyrics || 'No lyrics available'}</div>
      <div>Right Bottom</div>
    </div>
  );
};

export default RightComponent;
