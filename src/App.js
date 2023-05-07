import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import UserResults from "./components/UserResults";
import "./style/App.css";
import Weather from "./components/Weather/Weather";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      usersData: [],
      error: false,
      weatherData: [],
      weatherError: false,
    };
  }

  updateCity = (e) => {
    this.setState({ city: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.city}&format=json`;
    await axios
      .get(url)
      .then((response) => {
        this.setState({ usersData: response.data[0], error: false });
        // this.setState({ error: false });
      })
      .catch(() => {
        console.error();
        this.setState({ error: true });
      });
    // const response = await axios.get(url)
    // console.log(response.data);
    this.showWeatherData();
  };

  showWeatherData = async () => {
    try {
      await axios
        .get(
          `${process.env.REACT_APP_SERVER}/weather?searchQuery=${this.capitalize(this.state.city)}`
        )
        .then((response) => {
          this.setState(
            { weatherData: response.data, weatherError: false },
            () => console.log(this.state.weatherData)
          );
        })
        .catch(() => {
          console.error();
          this.setState({ weatherError: true });
        });
    } catch (error) {
      console.error(error.message);
    }
  };

  capitalize = (word) => {
    let firstLetter = word.slice(0, 1).toUpperCase();
    let restOfWord = word.slice(1);
    return firstLetter + restOfWord;
  }
  render() {
    return (
      <div>
        <header>
          <h1>City Explorer</h1>
        </header>
        <div className="container">
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label>City name: </Form.Label>
              <Form.Control
                onChange={this.updateCity}
                name="cityName"
                type="text"
                placeholder="enter city name"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Explore!
            </Button>
          </Form>
          {/* If there is an error, let the user know. Otherwise, show them the info on their city*/}
          {this.state.error ? (
            <p>
              Sorry, we couldn't process what you inputted. Please try again.
            </p>
          ) : this.state.usersData["place_id"] ? (
            <UserResults
              usersData={this.state.usersData}
              city={this.state.city}
            />
          ) : (
            <p>Please enter a city</p>
          )}

          {this.state.weatherError ? (
            <p>Sorry there is no weather data available for this city</p>
          ) : null}


          {this.state.weatherData.length > 0 && !this.state.weatherError ? (
            <Weather weatherData={this.state.weatherData} city={this.state.city}/>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
