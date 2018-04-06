import React, { Component } from 'react';

import './HomePage.css';
import { GridList, Card, Media } from 'react-md';
import images from '../assets/images/sampleimages/img';

export class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <GridList
          container="pictures"
          size={1}
          component="section"
          className="home-image"
        >
          {images.map(({ url, key }) => (
            <Card key={key}>
              <Media>
                <img src={url} alt="Something" />
              </Media>
            </Card>
          ))}
        </GridList>
      </div>
    );
  }
}

export default HomePage;
