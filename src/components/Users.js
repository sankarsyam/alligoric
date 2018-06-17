import React from 'react';
import '../assets/scss/Users.css';
import {
  DataTable,
  TableHeader,
  TableBody,
  TableRow,
  TableColumn,
} from 'react-md';
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardText,
  CardTitle,
} from 'react-md';

const style = { maxWidth: 600 };

const Users = () => (
  <div>
    <Card style={style} className="page-container">
      <CardTitle title="Card Title" subtitle="Card Subtitle" />

      <div className="users__user-list">
        <DataTable plain>
          <TableHeader>
            <TableRow>
              <TableColumn>Lorem 1</TableColumn>
              <TableColumn>Lorem 2</TableColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from(Array(10)).map((_, i) => (
              <TableRow key={i}>
                <TableColumn>Data will be here</TableColumn>
                <TableColumn>Value will be here</TableColumn>
              </TableRow>
            ))}
          </TableBody>
        </DataTable>
      </div>
    </Card>
  </div>
);

export default Users;
