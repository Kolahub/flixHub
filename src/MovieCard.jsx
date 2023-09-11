import React from 'react'

function MovieCard({movie}) {
  return (
    <div className="movie">
    <div className="">
      <p className="">
        {movie.Year}
      </p>
    </div>
    <div className="">
      <img src={movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/100' } alt={movie.Title} className="" />
    </div>

    <div className="">
      <span className="">
        {movie.Type}
      </span>
      <h3 className="">
        {movie.Title}
      </h3>
    </div>
  </div>
  )
}

export default MovieCard