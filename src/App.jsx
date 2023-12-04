import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import Dropzone from 'react-dropzone-uploader';
import './App.css';

function App() {
  const [url, setUrl] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const playerRef = useRef(null);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
  };

  const handleSeekChange = (e) => {
    const played = parseFloat(e.target.value);
    playerRef.current.seekTo(played);
  };

  const handleProgress = (state) => {
    console.log('onProgress', state);
  };

  const handleUploadChangeStatus = ({ meta, file }, status) => {
    if (status === 'done') {
      // File upload is complete, set the URL for the player
      setUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div className="app">
      <h1>React Music Player</h1>

      <div className="player-wrapper">
        <ReactPlayer
          ref={playerRef}
          url={url}
          playing={playing}
          volume={volume}
          onProgress={handleProgress}
        />
      </div>

      <div className="controls">
        <button onClick={handlePlayPause}>{playing ? 'Pause' : 'Play'}</button>
        <input
          type="range"
          min={0}
          max={1}
          step="any"
          value={volume}
          onChange={handleVolumeChange}
        />
        <input
          type="range"
          min={0}
          max={1}
          step="any"
          value={playerRef.current ? playerRef.current.getCurrentTime() / playerRef.current.getDuration() : 0}
          onChange={handleSeekChange}
        />
      </div>

      <Dropzone
        onChangeStatus={handleUploadChangeStatus}
        accept="audio/*"
        multiple={false}
        maxFiles={1}
        inputContent="Drag and drop an audio file here or click to browse"
        styles={{
          dropzone: { minHeight: 50, maxHeight: 200 },
          dropzoneActive: { borderColor: 'green' },
        }}
      />
    </div>
  );
}

export default App;
