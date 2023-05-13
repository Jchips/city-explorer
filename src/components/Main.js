import React, { Component } from "react";
import { Alert } from "react-bootstrap";
import CityResults from "./CityResults";
import Weather from "./Weather/Weather";
import Movies from "./Movies/Movies";

class Main extends Component {
  render() {
    return (
      <main className="container">
        {this.props.usersData["place_id"] && !this.props.cityError && (
          <h2>{this.props.city}</h2>
        )}

        <div className="map-weather-container">
          <section>
            {/* If there is an error, let the user know. Otherwise, show them the info on their city*/}
            {this.props.cityError && (
              <Alert variant="danger">
                Sorry, we couldn't process what you inputted. Please try again.
              </Alert>
            )}
            {this.props.usersData["place_id"] && !this.props.cityError && (
              <CityResults
                usersData={this.props.usersData}
                city={this.props.city}
              />
            )}
          </section>
          <section>
            {this.props.weatherError && (
              <Alert variant="info">
                Sorry there is no weather data available for this city.
              </Alert>
            )}
            {(this.props.weatherData.length > 0 && !this.props.weatherError) && (
              <Weather
                weatherData={this.props.weatherData}
                city={this.props.city}
              />
            )}
          </section>
        </div>
        {this.props.movieError && (
          <Alert variant="info">
            Sorry there is no movie data available for this city.
          </Alert>
        )}
        {this.props.movieData.length > 0 && !this.props.movieError && (
          <Movies 
            movieData={this.props.movieData} 
            city={this.props.city} 
          />
        )}
      </main>
    );
  }
}

export default Main;
