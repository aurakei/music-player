import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LyricsCard = () => {
  const [lyrics, setLyrics] = useState({
    title: '',
    content: 'Loading lyrics...',
  });

  // Dummy song ID for testing
  const songId = 123; // Replace this with the actual song ID from the API

  useEffect(() => {
    const fetchLyrics = async () => {
      try {
        const response = await axios.get(`https://your-api-endpoint/lyrics/${songId}`);
        const { title, content } = response.data; // Assuming API response structure
        setLyrics({ title, content });
      } catch (error) {
        console.error('Error fetching lyrics:', error);
        setLyrics({
          title: 'Error',
          content: 'Failed to load lyrics. Please try again later.',
        });
      }
    };

    fetchLyrics();
  }, [songId]);

  return (
    <div className="LyricsCard w-1/4 p-4 border border-gray-300 rounded-lg">
      {/* Title */}
      <h2 className="text-xl font-bold mb-2">{lyrics.title}</h2>

      {/* Lyrics */}
      <p className="text-gray-800">{lyrics.content}</p>
    </div>
  );
};

export default LyricsCard;
