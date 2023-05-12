import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './Movies.css'

class Movies extends Component {
  render() {
    let movieData = this.props.movieData;
    let city = this.props.city;
    return (
      <div className='movies'>
        <h3>{city} Movie Data 🎬</h3>
        <section>
        <Carousel>
          {movieData.map((movie, index) =>
            <Carousel.Item key={index}>
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
            </Carousel.Item>
            )}
        </Carousel>
        </section>
      </div>
    );
  }
}

export default Movies;
