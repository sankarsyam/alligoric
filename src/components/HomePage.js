import React, { Component } from 'react';

import '../assets/scss/Home.css';
import { Grid, Cell } from 'react-md';

export class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <div>
          <Grid className="grid-example">
            {Array.from(Array(3)).map((_, i) => (
              <Cell key={i} size={4} className="DashboardPage-cell">
                4........
              </Cell>
            ))}
          </Grid>
          <Grid className="grid-example">
            {Array.from(Array(3)).map((_, i) => (
              <Cell key={i} size={4}>
                4
              </Cell>
            ))}
          </Grid>
          <Grid className="grid-example">
            <Cell size={2}>6</Cell>
            <Cell size={2}>6</Cell>
            <Cell size={2}>6</Cell>
            <Cell size={2}>6</Cell>
            <Cell size={2}>6</Cell>
            <Cell size={2}>6</Cell>
          </Grid>
        </div>
      </div>
    );
  }
}

export default HomePage;
