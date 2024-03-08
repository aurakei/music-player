// SearchBar.jsx
import React, { useState } from "react";
import axios from "axios";

import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    const options = {
      method: "GET",
      url: "https://genius-song-lyrics1.p.rapidapi.com/search/",
      params: {
        q: "rita",
        per_page: "10",
        page: "1",
      },
      headers: {
        "X-RapidAPI-Key": "f3d509248emsh229f7737fd62c60p17b4d1jsneeecb5fed8ae",
        "X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
            // console.log(response.data.results);
      if (response.data) {
        console.log(response.data);
      } else {
        console.log("Result data is undefined or null.");
      }
          } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="ml-auto flex items-center">
      <FaSearch className="text-gray-500"/>
      <input
        type="text"
        placeholder="Search for artists, bands, tracks, podcasts..."
        className="border border-gray-300 p-2 rounded text-sm full"
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
