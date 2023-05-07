import React, { Component } from "react";
// import { Alert } from "react-bootstrap";
import axios from "axios";
import Header from "./components/Header";
import CityForm from "./components/CityForm";
// import CityResults from "./components/CityResults";
// import Weather from "./components/Weather/Weather";
import "./style/App.css";
import Main from "./components/Main";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      usersData: [],
      cityError: false,
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
        this.setState({ usersData: response.data[0], cityError: false });
      })
      .catch(() => {
        console.error();
        this.setState({ cityError: true });
      });
    // const response = await axios.get(url)
    // console.log(response.data);
    this.showWeatherData();
  };

  showWeatherData = async () => {
    await axios
      .get(`${process.env.REACT_APP_SERVER}/weather?searchQuery=${this.capitalize(this.state.city)}`)
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
  };

  capitalize = (word) => {
    let firstLetter = word.slice(0, 1).toUpperCase();
    let restOfWord = word.slice(1);
    return firstLetter + restOfWord;
  };
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <CityForm handleSubmit={this.handleSubmit} updateCity={this.updateCity}/>
          <Main
            city={this.state.city}
            usersData={this.state.usersData}
            weatherData={this.state.weatherData}
            cityError={this.state.cityError}
            weatherError={this.state.weatherError}
          />
        </div>
      </div>
    );
  }
}

export default App;
