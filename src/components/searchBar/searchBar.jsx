import React, { useState } from "react";
import axios from "axios";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    const options = {
      method: "GET",
      url: "https://genius-song-lyrics1.p.rapidapi.com/search/",
      params: {
        q: query,
        per_page: "10",
        page: "1",
      },
      headers: {
        "X-RapidAPI-Key": "",
        "X-RapidAPI-Host": "",
      },
    };

    try {
      const response = await axios.request(options);
      const { hits } = response.data.response;

      // Map the relevant data and pass it back to the parent component
      const searchResults = hits.map((hit) => ({
        id: hit.result.id,
        title: hit.result.title,
        artist: hit.result.primary_artist.name,
        lyrics: "Lyrics not available", // You might need to fetch lyrics separately
      }));

      onSearch(searchResults);
    } catch (error) {
      console.error("Error fetching songs:", error);
    }
  };

  return (
    <div className="ml-auto">
      <input
        type="text"
        placeholder="Search songs..."
        className="border border-gray-300 p-2 rounded"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="ml-2 bg-blue-500 text-white p-2 rounded"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
