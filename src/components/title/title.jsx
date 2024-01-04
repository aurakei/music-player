// TitleComponent.jsx
import React, { useState } from "react";
import SearchBar from "../searchBar/searchBar";

const TitleComponent = ({ title, onSearch }) => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (results) => {
    setSearchResults(results);
    onSearch(results); // Forward the search results to the parent component
  };

  return (
    <div className="flex justify-between items-start h-25">
      <h1 className="text-4xl text-blue-500 mt-4">{title}</h1>
      <SearchBar onSearch={handleSearch} />
    </div>
  );
};

export default TitleComponent;
