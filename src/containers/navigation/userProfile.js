import React from 'react';
import { NavDropdown, MenuItem } from 'react-bootstrap';

class UserProfile extends React.Component {
  render() {
    return (
      <NavDropdown eventKey={3} title="User Profile" id="user-profile-dropdown">
        <MenuItem eventKey={3.1}>Name</MenuItem>
        <MenuItem eventKey={3.2}>Domain</MenuItem>
        <MenuItem eventKey={3.3}>Businees Unit</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Logout</MenuItem>
      </NavDropdown>
    );
  }
}

export default UserProfile;
