import React from 'react';
import '../assets/scss/Users.css';
import Card from 'react-md/lib/Cards/Card';
import CardText from 'react-md/lib/Cards/CardText';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import Divider from 'react-md/lib/Dividers';

const Users = () => (
  <div className="UsersPage">
    <Card className="new-project page-container">
      <CardTitle
        className="users-page__title page-container__title"
        title="Users"
      />
      <Divider />
      <div className="users-page_list" />
    </Card>
  </div>
);

export default Users;
