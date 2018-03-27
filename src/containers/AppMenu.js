import React, { Component } from 'react';
import './AppMenu.css';
import MdHome from 'react-icons/lib/md/home';
import MdWork from 'react-icons/lib/md/work';
import MdInbox from 'react-icons/lib/md/inbox';
import TiContacts from 'react-icons/lib/ti/contacts';
import TiDatabase from 'react-icons/lib/ti/database';

class AppMenu extends Component {
  render() {
    return (
      <div className="AppMenu">
        <MdHome className="menu-icon" />
        <MdWork className="menu-icon" />
        <MdInbox className="menu-icon" />
        <TiContacts className="menu-icon" />
        <TiDatabase className="menu-icon" />
      </div>
    );
  }
}

export default AppMenu;
