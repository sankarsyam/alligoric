import React, { Component } from 'react';
import { Card, CardText, CardTitle } from 'react-md/lib/Cards';

import './HomePage.css';

export class HomePage extends Component {
  intro() {
    return (
      <Card className="HomePage-intro">
        <CardTitle title="Redux Template" />
        <CardText />
      </Card>
    );
  }

  render() {
    return <div className="HomePage" />;
  }
}

export default HomePage;
