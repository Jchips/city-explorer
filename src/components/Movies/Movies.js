import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './Movies.css'

class Movies extends Component {
  render() {
    const { movieData, city } = this.props;
    return (
      <div className='movies'>
        <h3>{city} Movies 🎬</h3>
        <section>
          <Carousel>
            {movieData.map((movie, index) =>
              <Carousel.Item key={index}>
                <Movie movie={movie} />
              </Carousel.Item>
            )}
          </Carousel>
        </section>
      </div>
    );
  }
}

class Movie extends Component {
  render() {
    const { movie } = this.props;
    return (
      <>
        <div className='row'>
          <div className="col col-md-4 col-12">
            <img
              className="d-block w-100"
              src={movie.image_url}
              alt={`${movie.title} movie poster`}
            />
          </div>
          <div className='col col-md-8 col-12 movie-info'>
            <h4>{movie.title}</h4>
            <p><span>Overview: </span>{movie.overview}</p>
            <section className='ratings'>
              <p><span>Popularity: </span>{movie.popularity},</p>
              <p><span>Average votes: </span>{movie.average_votes},</p>
              <p><span>Total votes: </span>{movie.total_votes},</p>
            </section>
            <p><span>Released: </span>{movie.released_on}</p>
          </div>
        </div>
      </>
    );
  }
}

export default Movies;
