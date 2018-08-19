import PropTypes from 'prop-types';
import { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Authorize extends Component {
  checkAuthenticated(allowedRoles) {
    if (!allowedRoles) return true;
    const allowed = this.props.loginUser.roles.find(role =>
      allowedRoles.includes(role)
    );
    return !!allowed;
  }

  render() {
    return this.props.children.map((child, key) => {
      return this.checkAuthenticated(child.props.allowedRoles) ? child : null;
    });
  }
}

Authorize.propTypes = {
  loginUser: PropTypes.object,
};

const mapStateToProps = state => ({
  loginUser: state.user.loggedInUser,
});

export default withRouter(connect(mapStateToProps)(Authorize));
