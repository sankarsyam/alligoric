import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class DashboardPage extends Component {
  render() {
    return <div className="DashboardPage">Welcome Bro</div>;
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
