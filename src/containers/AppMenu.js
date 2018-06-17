import React, { Component } from 'react';
import './AppMenu.css';
import Authorize from './Authorize';
import { Button } from 'react-md';

class AppMenu extends Component {
  render() {
    const { history } = this.props;
    return (
      <div className="AppMenu">
        <Authorize>
          <Button
            allowedRoles={['admin']}
            className="menu-new-icon"
            icon
            onClick={() => history.push('/home')}
          >
            home
          </Button>

          <Button
            allowedRoles={['admin']}
            className="menu-new-icon"
            icon
            onClick={() => history.push('/dashboard')}
          >
            dashboard
          </Button>

          <Button
            allowedRoles={['admin']}
            className="menu-new-icon"
            icon
            onClick={() => history.push('/users')}
          >
            people
          </Button>
        </Authorize>
      </div>
    );
  }
}

export default AppMenu;
