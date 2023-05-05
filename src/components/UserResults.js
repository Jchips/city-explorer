import React, { Component } from "react";
import { Card } from "react-bootstrap";

class UserResults extends Component {
  render() {
    return (
      <div>
        <p>Entered city: {this.props.city}</p>
        <Card>
          <Card.Body>
            <Card.Img
              variant="top"
              src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${this.props.usersData.lat},${this.props.usersData.lon}&zoom=12`}
              alt={`map of ${this.props.usersData["display_name"]}`}
            ></Card.Img>
            <Card.Title>{this.props.usersData["display_name"]}</Card.Title>
            <Card.Text>
              Longitude: {this.props.usersData.lon} &nbsp; Latitude:{" "}
              {this.props.usersData.lat}
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default UserResults;
