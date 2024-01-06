# Music Player App

The Music Player App is a simple web application built with React that allows users to search for songs using the Genius Song Lyrics API and displays the search results. It features a responsive user interface with a title bar, search functionality, a list of search results, and additional components for displaying the currently playing song and lyrics.

## Features

- **Search Bar:** Allows users to input search queries to find songs.
- **Search Results:** Displays a list of songs based on the user's search queries.
- **LeftBar Component:** A sidebar displaying the list of search results.
- **NowPlayingCard Component:** A card displaying the details of the currently playing song.
- **LyricsCard Component:** A card displaying the lyrics of the currently playing song.

## Getting Started

Follow these instructions to set up and run the Music Player App on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd music-player-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Usage

1. Obtain a free API key from the [Genius API](https://docs.genius.com/) and replace the placeholder key in `src/components/searchBar/SearchBar.jsx` with your key:

   ```javascript
   const options = {
     headers: {
       "Authorization": "Bearer YOUR_API_KEY",
     },
   };
   ```

2. Start the development server:

   ```bash
   npm start
   ```

3. Open your browser and visit `http://localhost:3000` to use the Music Player App.

## Contributing

Feel free to contribute to the project by opening issues or submitting pull requests. Follow the guidelines outlined in the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Thanks to [Genius API](https://docs.genius.com/) for providing the song lyrics data.

Enjoy listening to your favorite music with the Music Player App!