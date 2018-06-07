import React, { Component } from 'react';
import './AppMenu.css';
import MdHome from 'react-icons/lib/md/home';
import MdWork from 'react-icons/lib/md/work';
import MdInbox from 'react-icons/lib/md/inbox';
import MdDashboard from 'react-icons/lib/md/dashboard';
import TiContacts from 'react-icons/lib/ti/contacts';
import TiDatabase from 'react-icons/lib/ti/database';
import Authorize from './Authorize';

class AppMenu extends Component {
  render() {
    const { history } = this.props;
    return (
      <div className="AppMenu">
        <Authorize>
          <MdHome
            allowedRoles={['admin']}
            className="menu-icon"
            onClick={() => history.push('/home')}
          />
          <MdDashboard
            allowedRoles={['admin']}
            className="menu-icon"
            onClick={() => history.push('/dashboard')}
          />
          <MdWork
            allowedRoles={['admin']}
            className="menu-icon"
            onClick={() => history.push('/dashboard')}
          />
          <MdInbox
            allowedRoles={['admin']}
            className="menu-icon"
            onClick={() => history.push('/dashboard')}
          />
          <TiContacts
            allowedRoles={['admin']}
            className="menu-icon"
            onClick={() => history.push('/dashboard')}
          />
          <TiDatabase
            allowedRoles={['admin']}
            className="menu-icon"
            onClick={() => history.push('/dashboard')}
          />
        </Authorize>
      </div>
    );
  }
}

export default AppMenu;
