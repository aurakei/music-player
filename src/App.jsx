import React from "react";
import { Link } from "react-router-dom";

import coverImg from "./images/coverImg.webp";

const App = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col justify-center items-center">
      <div className="max-w-md bg-gray-100 rounded-lg overflow-hidden shadow-lg">
        <div
          className="w-full h-64 object-cover"
          style={{
            backgroundImage: `url(${coverImg})`,
            backgroundSize: "cover",
          }}
        />
        <div className="p-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">
            Discover more with Musician
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Musician lets you listen offline, ad-free, with over 320 million
            tracks — and growing.
          </p>
          <div className="mt-4 flex justify-center">
            <button className="mr-4 py-2 px-6 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500">
              Learn more
            </button>
            <button className="py-2 px-6 bg-orange-600 text-white rounded-lg shadow-md hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500">
              Try it free for 30 days
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center mt-8">
        <Link
          to="./pages/SignIn.jsx"
          className="text-sm text-gray-700 mr-4 hover:underline"
        >
          Sign in
        </Link>
        <a
          href="#"
          className="text-sm text-white bg-orange-600 py-2 px-4 rounded-lg hover:bg-orange-500"
        >
          Create account
        </a>
        <p className="ml-4 text-sm text-gray-700">For Artists</p>
      </div>
    </div>
  );
};

export default App;
