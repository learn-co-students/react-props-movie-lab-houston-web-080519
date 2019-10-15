import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    console.log(movieData)
    return movieData.map(function(movie){
      console.log(movie)
      return <MovieCard movie={movie}/>
      //<h2>text in here hi</h2>
      // <h2 onClick={()=>{}}>some text</h2>
    })
    // map over your movieData array and return the correct

  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
