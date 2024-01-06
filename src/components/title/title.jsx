// TitleComponent.jsx
import React, { useState } from "react";
import SearchBar from "../searchBar/searchBar";

const TitleComponent = ({ title, onSearch }) => {
  return (
    <div className="flex justify-between items-center h-25">
      <div>
        <h1 className="text-4xl text-blue-500 mt-4">{title}</h1>
      </div>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default TitleComponent;
