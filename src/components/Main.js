import React, { Component } from 'react';
import { Alert } from "react-bootstrap";
import CityResults from "./CityResults";
import Weather from "./Weather/Weather";

class Main extends Component {
  render() {
    return (
      <main>
        {(this.props.usersData["place_id"] && !this.props.cityError) && <h2>{this.props.city}</h2>}

        <section className="api-data-container">
          {/* If there is an error, let the user know. Otherwise, show them the info on their city*/}
          {this.props.cityError && (
            <Alert variant="danger">
              Sorry, we couldn't process what you inputted. Please try again.
            </Alert>
          )}
          {(this.props.usersData["place_id"] && !this.props.cityError) && (
            <CityResults
              usersData={this.props.usersData}
              city={this.props.city}
            />
          )}
          {this.props.weatherError && (
            <Alert variant='info'>Sorry there is no weather data available for this city</Alert>
          )}
          {(this.props.weatherData.length > 0 && !this.props.weatherError) && (
            <Weather
              weatherData={this.props.weatherData}
              city={this.props.city}
            />
          )}
        </section>
      </main>
    );
  }
}

export default Main;
