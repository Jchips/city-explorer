import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import './Weather.css';

class Weather extends Component {

  displayDate = (date) => {
    const display = new Date(date).toString();
    console.log('date: ', display);
    return display.slice(4, 15);
  }
  render() {
    let weatherData = this.props.weatherData;
    let city = this.props.city;
    return (
      <div className='weather'>
        <h2>{city} Weather Data 🌤️</h2>
        <section className='cards'>
          {weatherData.map(day =>
            <Card key={day.date}>
              <Card.Title>{this.displayDate(day.date)}</Card.Title>
              <Card.Text>{day.description}</Card.Text>
            </Card>
          )}
        </section>
      </div>
    );
  }
}

export default Weather;
