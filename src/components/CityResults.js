import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "../style/CityResults.css";

class CityResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  handleImageLoad = () => {
    this.setState({
      isLoading: false,
    });
  };
  render() {
    let searchedCity = this.props.usersData;
    let isLoading = this.state.isLoading;
    return (
      <div className="city-results">
        <h3>Map</h3>
        <Card>
          <Card.Body>
            <div className="img-container">
              {/* Makes a spinning globe appear while the image is first loading on the page.
              isLoading code resource from ChatGPT */}
              {isLoading && (
                <div className="loader-container">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Rotating_earth_%28large%29_transparent.gif"
                    alt="loading"
                  />
                </div>
              )}
              <Card.Img
                variant="top"
                src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${searchedCity.lat},${searchedCity.lon}&zoom=13`}
                alt={`map of ${searchedCity.display_name}`}
                onLoad={this.handleImageLoad}
              ></Card.Img>
            </div>
            <Card.Title>{searchedCity.display_name}</Card.Title>
            <Card.Text>
              Latitude: {searchedCity.lat} &nbsp; Longitude:{" "}
              {searchedCity.lon}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default CityResults;
