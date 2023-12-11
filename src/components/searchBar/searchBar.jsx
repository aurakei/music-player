import React, { useState } from "react";
import axios from "axios";
const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    const axios = require("axios");

    const options = {
      method: "GET",
      url: "https://genius-song-lyrics1.p.rapidapi.com/search/",
      params: {
        q: "<REQUIRED>",
        per_page: "10",
        page: "1",
      },
      headers: {
        "X-RapidAPI-Key": "f3d509248emsh229f7737fd62c60p17b4d1jsneeecb5fed8ae",
        "X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
      },
    };

    try {
      //make the API request using axios
      const response = await axios.request(options);
      console.log(response)
      console.log(response.data);
    } catch (error) {
      console.error(error);
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
