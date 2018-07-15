import React, { Component, PropTypes } from 'react';
import '../assets/scss/Users.css';
import Card from 'react-md/lib/Cards/Card';
import CardText from 'react-md/lib/Cards/CardText';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import Divider from 'react-md/lib/Dividers';
import { Button } from 'react-md';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = { collapse: false };
    this.handleToggleCollapse = this.handleToggleCollapse.bind(this);
  }

  handleToggleCollapse() {
    this.setState({ collapse: !this.state.collapse });
  }

  getHeader = () => {
    const { projectType } = this.props;
    return (
      <tr className="user-page_table-row">
        <td className="">
          <Button
            className="dashboard-header__arrow"
            icon
            onClick={this.handleToggleCollapse}
          >
            {this.state.collapse ? 'arrow_drop_down' : 'arrow_drop_up'}
          </Button>
        </td>
      </tr>
    );
  };

  getUserBasicDetails = () => {
    const { projectType } = this.props;
    return (
      <tbody className={this.state.collapse ? 'collapse' : ''}>
        <span>Hello</span>
        <br />
        <span>Hello</span>
        <br />
        <span>Hello</span>
        <br />
        <span>Hello</span>
        <br />
        <span>Hello</span>
        <br />
      </tbody>
    );
  };

  render() {
    const { projectType } = this.props;
    return (
      <div className="UsersPage">
        <Card className="users-page page-container">
          <CardTitle
            className="users-page__title page-container__title"
            title="Users"
          />
          <Divider />
          <div className="users-page_list">
            <table className="user-page_table">
              {this.getHeader()}
              {this.getUserBasicDetails()}
            </table>
          </div>
        </Card>
      </div>
    );
  }
}

Users.propTypes = {};

export default Users;
