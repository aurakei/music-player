import React from "react";

const TitleComponent = ({ title }) => {
  return (
    <div className="flex justify-center items-start h-25">
      <h1 className="text-4xl text-blue-500 mt-4">{title}</h1>
    </div>
  );
};

export default TitleComponent;
