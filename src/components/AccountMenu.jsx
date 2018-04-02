/* AccountMenu.jsx */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  FontIcon,
  AccessibleFakeButton,
  IconSeparator,
  DropdownMenu,
} from 'react-md';

const AccountMenu = ({ simplifiedMenu }) => (
  <DropdownMenu
    id={`${!simplifiedMenu ? 'smart-' : ''}avatar-dropdown-menu`}
    menuItems={[{
        primaryText: 'Log Out',
        className: 'MenuDrawer-link',
        onClick: () => this.props.handleLogout
      }]}
    anchor={{
      x: DropdownMenu.HorizontalAnchors.CENTER,
      y: DropdownMenu.VerticalAnchors.BOTTOM,
    }}
    position={DropdownMenu.Positions.TOP_LEFT}
    animationPosition="below"
    sameWidth
    simplifiedMenu={simplifiedMenu}
  >
    <AccessibleFakeButton
      component={IconSeparator}
      iconBefore
      label={
        <IconSeparator label="some.email@example.com">
          <FontIcon>arrow_drop_down</FontIcon>
        </IconSeparator>
      }
    >
      <Avatar suffix="pink">S</Avatar>
    </AccessibleFakeButton>
  </DropdownMenu>
);

AccountMenu.propTypes = {
  simplifiedMenu: PropTypes.bool,
};

export default AccountMenu;
