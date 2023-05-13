import React, { Component } from "react";
import axios from "axios";
import Header from "./components/Header";
import CityForm from "./components/CityForm/CityForm";
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
      movieData: [],
      movieError: false
    };
  }

  updateCity = (e) => {
    this.setState({ city: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.city}&format=json`;
    axios
      .get(url)
      .then((response) => {
        this.setState({ usersData: response.data[0], cityError: false })
        this.showWeatherData();
        this.showMovieData();
      })
      .catch(() => {
        console.error();
        this.setState({ cityError: true, weatherError: true, movieError: true });
      });
    // const response = await axios.get(url)
    // console.log(response.data);
    
  };

  showWeatherData = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER}/weather?searchQuery=${this.capitalize(this.state.city)}`)
      .then((response) => this.setState({ weatherData: response.data, weatherError: false }, () => console.log(this.state.weatherData)))
      .catch((error) => {
        console.error(error);
        this.setState({ weatherError: true });
      });
  };

  showMovieData = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER}/movies?searchQuery=${this.capitalize(this.state.city)}`)
      .then(response => this.setState({movieData: response.data, movieError: false}, () => console.log(this.state.movieData)))
      .catch(error => {
        console.error(error);
        this.setState({ movieError: true });
      });
  }

  capitalize = (word) => {
    let firstLetter = word.slice(0, 1).toUpperCase();
    let restOfWord = word.slice(1);
    return firstLetter + restOfWord;
  };
  render() {
    return (
      <div>
        <Header />
        <div>
          <CityForm handleSubmit={this.handleSubmit} updateCity={this.updateCity}/>
          <Main
            city={this.state.city}
            usersData={this.state.usersData}
            weatherData={this.state.weatherData}
            movieData={this.state.movieData}
            cityError={this.state.cityError}
            weatherError={this.state.weatherError}
            movieError={this.state.movieError}
          />
        </div>
      </div>
    );
  }
}

export default App;
