import React,{Component} from 'react';

import AccountMenu from './AccountMenu';

class AccountDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };

    }
 render(){
     return(
  <div className="menus__examples">
    <AccountMenu handleLogout={this.props.handleLogout}/>
  </div>);
}
}

export default AccountDropdown;