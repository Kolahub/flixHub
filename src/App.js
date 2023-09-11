import { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com?apikey=7e2b9a66';

const movie = {
  Poster:"https://m.media-amazon.com/images/M/MV5BMzY1MTIyNDg4MF5BMl5BanBnXkFtZTcwODQ4MTEzMw@@._V1_SX300.jpg",
  Title: "All the King's Men",
  Type: "movie",
  Year: "2006",
  imdbID: "tt0405676"
}

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  const searchMovies = async (title) => {
    const response = await fetch (`${API_URL}&s=${title}`)
    const data = await response.json();
    setMovies(data.Search)
    console.log(data.Search)
  }

  useEffect(() => {
    searchMovies("Avengers")
  }, [])
  return (
    <div className = "app">
      <h1>FlixHub</h1>

      <div className='search'>
        <input type="text" placeholder="Search for Movies" 
        value= {searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img 
        src= {SearchIcon}
        alt='Search'
        onClick={() => searchMovies(searchTerm)}
        />
        </div>

        {
          movies?.length > 0 
          ? (
            <div className="container">
              {movies.map((movie) => (
              <MovieCard movie = {movie} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2 className="">No movies found</h2>
            </div>
          )
        }

    </div>
  );
}

export default App;
