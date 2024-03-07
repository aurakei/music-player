// Homepage.jsx
import React, { useState } from "react";
import TitleComponent from "../components/title/title.jsx";
import ArtistCard from "../components/cardList/ArtistCard.jsx";
import CoverImg1 from "../images/coverImg1.jpeg";
import CoverImg2 from "../images/coverImg2.jpeg";
import CoverImg3 from "../images/coverImg3.jpeg";
import CoverImg4 from "../images/coverImg4.jpeg";
import CoverImg5 from "../images/coverImg5.jpeg";
import CoverImg6 from "../images/coverImg6.jpeg";

const Homepage = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  const artists = [
    {
      id: 1,
      imageSrc: CoverImg1,
      artistName: "Ozuna",
      songName: "Ozuna, Maldy - Brabus",
    },
    {
      id: 2,
      imageSrc: CoverImg2,
      artistName: "Ozuna2",
      songName: "Ozuna, Maldy - Brabus",
    },
    {
      id: 3,
      imageSrc: CoverImg3,
      artistName: "Ozuna3",
      songName: "Ozuna, Maldy - Brabus",
    },
    {
      id: 4,
      imageSrc: CoverImg4,
      artistName: "Ozuna3",
      songName: "Ozuna, Maldy - Brabus",
    },
    {
      id: 5,
      imageSrc: CoverImg5,
      artistName: "Ozuna3",
      songName: "Ozuna, Maldy - Brabus",
    },
    {
      id: 6,
      imageSrc: CoverImg6,
      artistName: "Ozuna3",
      songName: "Ozuna, Maldy - Brabus",
    },
    // Add more artists as needed
  ];

  return (
    <div
      className="flex flex-col h-screen"
      style={{
        // backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <TitleComponent
        title="Musician"
        onSearch={handleSearchResults}
        className="w-full"
      />

      <div className="flex flex-1">
        <div className="w-full h-8 text-center text-zinc-800 text-xs font-thin font-['Inter'] leading-loose">
          Hear what’s trending for free in the Musician community
        </div>
      </div>

      {searchResults.length > 0 && (
        <div className="flex justify-center mb-4">
          {searchResults.map((result) => (
            <ArtistCard
              key={result.id}
              imageSrc={result.imageSrc}
              artistName={result.artistName}
              songName={result.songName}
            />
          ))}
        </div>
      )}

      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-wrap justify-center">
          {artists.map((artist) => (
            <ArtistCard
              key={artist.id}
              imageSrc={artist.imageSrc}
              artistName={artist.artistName}
              songName={artist.songName}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-end mt-4 mr-4">
        <button className="w-auto px-4 py-2.5 bg-orange-600 rounded-sm border border-orange-600 text-white text-lg font-thin font-['Inter'] leading-none">
          Explore trending playlists
        </button>
      </div>

      <div className="flex flex-col items-center justify-center h-screen mt-4 mb-4">
        <div className="w-100 h-96 px-16 bg-zinc-100 justify-center items-start gap-11 inline-flex">
          <img className="w-96 h-96" src={CoverImg4} alt="Placeholder Image3" />
          <div className="w-80 h-96 relative flex-col justify-start items-start flex">
            <div className="pr-36 flex-col justify-center items-start gap-4 inline-flex">
              <div className="w-48 h-20 text-zinc-800 text-4xl font-thin font-['Inter'] leading-10">
                Never stop
                <br />
                listening
              </div>
              <div className="w-16 h-0.5 bg-gradient-to-r from-fuchsia-800 via-orange-600 to-orange-600" />
            </div>
            <div className="h-24 pr-2 justify-start items-center inline-flex">
              <div className="w-80 h-24 text-zinc-800 text-base font-thin font-['Inter'] leading-loose">
                Musician is available on
                <br />
                Web, iOS, Android, Sonos,
                <br />
                Chromecast, and Xbox One.
              </div>
            </div>
            <div className="h-10 pr-16 justify-start items-start gap-2 inline-flex">
              <img
                className="w-28 h-10"
                src="https://via.placeholder.com/120x40"
                alt="Placeholder Image1"
              />
              <img
                className="w-32 h-10"
                src="https://via.placeholder.com/135x40"
                alt="Placeholder Image2"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-100 h-auto p-8 bg-black justify-center items-start flex flex-col gap-4">
        <div className="w-full text-center text-zinc-200 text-2xl font-thin font-['Inter'] leading-10">
          Calling all creators
        </div>
        <div className="w-full text-center text-zinc-200 text-base font-thin font-['Inter'] leading-loose">
          Get on Musician to connect with fans, share your sounds, and grow your
          audience. What are you waiting for?
        </div>
        <div className="w-full flex justify-center">
          <button className="w-40 h-11 px-6 py-3.5 rounded-sm bg-gradient-to-r from-fuchsia-800 via-orange-600 to-orange-600 text-white text-lg font-thin font-['Inter'] leading-none">
            Find out more
          </button>
        </div>
      </div>

      <div className="w-100 h-auto p-8 bg-zinc-100 justify-center items-start flex flex-col gap-4">
        <div className="w-full text-center text-zinc-800 text-2xl font-thin font-['Inter'] leading-10">
          Thanks for listening. Now join in.
        </div>
        <div className="w-full text-center text-zinc-800 text-base font-thin font-['Inter'] leading-loose">
          Save tracks, follow artists and build playlists. All for free.
        </div>
        <div className="w-full flex justify-center">
          <button className="w-48 h-11 px-9 py-3.5 bg-orange-600 rounded-sm border border-orange-600 text-white text-lg font-thin font-['Inter'] leading-none">
            Create account
          </button>
        </div>
        <div className="w-full text-center text-zinc-800 text-xs font-thin font-['Inter'] leading-none">
          Already have an account?
          <button className="w-15 h-5 px-1 py-1  rounded-sm border border-orange-600 text-black text-xs font-thin font-['Inter'] leading-none">
            Sign In
          </button>
        </div>
      </div>

      <div className="w-full h-24 relative border-t border-zinc-100 flex justify-center items-start">
        <div className="w-full px-4 py-3.5 flex flex-wrap justify-start items-center gap-4">
          <div className="text-stone-300 text-sm font-thin font-['Inter'] leading-tight">
            Directory
          </div>
          <div className="text-stone-300 text-xs font-normal font-['Inter'] leading-tight">
            ⁃
          </div>
          <div className="text-stone-300 text-sm font-thin font-['Inter'] leading-tight">
            About us
          </div>
          <div className="text-stone-300 text-xs font-normal font-['Inter'] leading-tight">
            ⁃
          </div>
          <div className="text-stone-300 text-sm font-thin font-['Inter'] leading-tight">
            Artist Resources
          </div>
          <div className="text-stone-300 text-xs font-normal font-['Inter'] leading-tight">
            ⁃
          </div>
          <div className="text-stone-300 text-sm font-thin font-['Inter'] leading-tight">
            Blog
          </div>
          <div className="text-stone-300 text-xs font-normal font-['Inter'] leading-tight">
            ⁃
          </div>
          <div className="text-stone-300 text-sm font-thin font-['Inter'] leading-tight">
            Jobs
          </div>
          <div className="text-stone-300 text-xs font-normal font-['Inter'] leading-tight">
            ⁃
          </div>
          <div className="text-stone-300 text-sm font-thin font-['Inter'] leading-tight">
            Developers
          </div>
          <div className="text-stone-300 text-xs font-normal font-['Inter'] leading-tight">
            ⁃
          </div>
          <div className="text-stone-300 text-sm font-thin font-['Inter'] leading-tight">
            Help
          </div>
          <div className="text-stone-300 text-xs font-normal font-['Inter'] leading-tight">
            ⁃
          </div>
          <div className="text-stone-300 text-sm font-thin font-['Inter'] leading-tight">
            Legal
          </div>
          <div className="text-stone-300 text-xs font-normal font-['Inter'] leading-tight">
            ⁃
          </div>
          <div className="text-stone-300 text-sm font-thin font-['Inter'] leading-tight">
            Do Not Sell or Share My Personal Information
          </div>
          <div className="text-stone-300 text-xs font-normal font-['Inter'] leading-tight">
            ⁃
          </div>
          <div className="text-stone-300 text-sm font-thin font-['Inter'] leading-tight">
            Privacy
          </div>
          <div className="text-stone-300 text-xs font-normal font-['Inter'] leading-tight">
            ⁃
          </div>
          <div className="text-stone-300 text-sm font-thin font-['Inter'] leading-tight">
            Cookie Policy
          </div>
          <div className="text-stone-300 text-xs font-normal font-['Inter'] leading-tight">
            ⁃
          </div>
          <div className="text-stone-300 text-sm font-thin font-['Inter'] leading-tight">
            Cookie Manager
          </div>
          <div className="text-stone-300 text-xs font-normal font-['Inter'] leading-tight">
            ⁃
          </div>
          <div className="text-stone-300 text-sm font-thin font-['Inter'] leading-tight">
            Imprint
          </div>
          <div className="text-stone-300 text-xs font-normal font-['Inter'] leading-tight">
            ⁃
          </div>
          <div className="text-stone-300 text-sm font-thin font-['Inter'] leading-tight">
            Charts
          </div>
          <div className="text-blue-500 text-sm font-thin font-['Inter'] leading-tight">
            Language:{" "}
          </div>
          <div className="text-zinc-800 text-sm font-thin font-['Inter'] leading-tight">
            English (US)
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
