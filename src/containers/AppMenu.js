import React, { Component } from 'react';
import './AppMenu.css';
import MdHome from 'react-icons/lib/md/home';
import MdWork from 'react-icons/lib/md/work';
import MdInbox from 'react-icons/lib/md/inbox';
import MdDashboard from 'react-icons/lib/md/dashboard';
import TiContacts from 'react-icons/lib/ti/contacts';
import TiDatabase from 'react-icons/lib/ti/database';

class AppMenu extends Component {
  render() {
    const { history, isAuthenticated } = this.props;
    return (
      <div className="AppMenu">
        <MdHome className="menu-icon" onClick={() => history.push('/home')} />
        <MdDashboard
          className="menu-icon"
          onClick={() => history.push('/dashboard')}
        />
        <MdWork className="menu-icon" />
        <MdInbox className="menu-icon" />
        <TiContacts className="menu-icon" />
        <TiDatabase className="menu-icon" />
      </div>
    );
  }
}

export default AppMenu;
