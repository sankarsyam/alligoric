import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Cell } from 'react-md';
import './Dashboard.css';

class DashboardPage extends Component {
  render() {
    return (
      <div className="DashboardPage">
        <div>
          <Grid className="grid-example">
            {Array.from(Array(3)).map((_, i) => (
              <Cell key={i} size={4} className="DashboardPage-cell">
                4
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

DashboardPage.propTypes = {
  count: PropTypes.number,
  dispatch: PropTypes.func,
  items: PropTypes.array,
};

const mapStateToProps = state => ({
  count: state.count,
  items: state.items.list,
});

export default connect(mapStateToProps)(DashboardPage);
