import React, { Component } from 'react';


class Movies extends Component {
  constructor(){
    super();
    this.state = {
      movies: []
    }
  }
  componentDidMount(){
    fetch('http://localhost:5000/movies')
    .then(res => res.json())
    .then(movies => this.setState({movies}, () => console.log('Movies fetched ...', movies)))
    .catch(function(error) {
      console.log('Looks like there was a problem: \n', error);
    })
  }

  render() {
    return(
      <div>
        <h1>Movies</h1>
        <ul>
          {this.state.movies.map((movie, i) => {
            if(i <20 ){
            return(
                <h4 key={movie.movieId}>{i+1}. {movie.title}, {movie.genres}</h4>   
            )} else {
              return null;
            }
          })}
        </ul>
      </div>
    );
  }
}

export default Movies;
