import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class UserResults extends Component {
  render() {
    return (
      <div>
        <Card>
          <Card.Body>
            <Card.Title>{this.props.usersData['display_name']}</Card.Title>
            <Card.Text>
              Longitude: {this.props.usersData.lon} &nbsp;
              Latitude: {this.props.usersData.lat}         
            </Card.Text>
            <Card.Text></Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default UserResults;
