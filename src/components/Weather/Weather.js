import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import './Weather.css';

class Weather extends Component {

  displayDate = (date) => {
    date = date.slice(0, 11);
    const display = new Date(date).toString();
    return display.slice(4, 15);
  }
  
  render() {
    const {weatherData, city} = this.props;
    return (
      <div className='weather'>
        <h3>{city} Weather 🌤️</h3>
        <section className='cards'>
          {weatherData.map(day =>
            <WeatherDay day={day} displayDate={this.displayDate} key={day.date}/>
          )}
        </section>
      </div>
    );
  }
}

class WeatherDay extends Component {
  render() {
    let {day, displayDate} = this.props;
    return (
      <Card>
        <Card.Title>{displayDate(day.date)}</Card.Title>
        <Card.Text>{day.description}</Card.Text>
      </Card>
    );
  }
}

export default Weather;
