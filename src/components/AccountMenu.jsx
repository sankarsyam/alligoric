/* AccountMenu.jsx */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ImageURL from '../assets/images/users/syam.jpg';

import {
  Avatar,
  FontIcon,
  AccessibleFakeButton,
  IconSeparator,
  DropdownMenu,
} from 'react-md';

class AccountMenu extends Component {
  constructor(props) {
    super(props);
    console.dir('Userrrr' + this.props.loginUser);
    // this.state = {
    //  email: this.props.loginUser.email
    // };

  }
  render() {
    return (
      <DropdownMenu className="loginuser-in-header"

        menuItems={[{
          primaryText: 'Log Out',
          className: 'MenuDrawer-link',
          onClick: () => this.props.handleLogout()
        }]}
        anchor={{
          x: DropdownMenu.HorizontalAnchors.BOTTOM,
          y: DropdownMenu.VerticalAnchors.BOTTOM,
        }}
        position={DropdownMenu.Positions.TOP_LEFT}
        animationPosition="below"
        sameWidth>

        <AccessibleFakeButton
          component={IconSeparator}
          iconBefore
          label={
            <IconSeparator label={this.props.loginUser.email}>
              <FontIcon>arrow_drop_down</FontIcon>
            </IconSeparator>
          }
        >
          <Avatar src={ImageURL} role="presentation" />
        </AccessibleFakeButton>
      </DropdownMenu>
    );
  }
}



AccountMenu.propTypes = {
  dispatch: PropTypes.func,
  isAuthenticated: PropTypes.bool.isRequired,
  loginUser: PropTypes.object
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.user.isAuthenticated,
    loginUser: state.user.loggedInUser
  }
};

export default withRouter(connect(mapStateToProps)(AccountMenu));
