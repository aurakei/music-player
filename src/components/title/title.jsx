import React, { useState } from "react";
import SearchBar from "../searchBar/searchBar";
// import Card from "../cardList/card";

const TitleComponent = ({ title }) => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (results) => {
    setSearchResults(results);
  };

  return (
    <div className="flex justify-center items-start h-25">
      <h1 className="text-4xl text-blue-500 mt-4">{title}</h1>
      <SearchBar onSearch={handleSearch} />
    </div>
  );
};

export default TitleComponent;
