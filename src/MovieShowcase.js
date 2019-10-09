import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map((data,index) => <MovieCard key = {index}  {...data}/>)

        // movieData.map((movie) =>
        //   <MovieCard movie={movie} key={movie.title} />
         
        
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
