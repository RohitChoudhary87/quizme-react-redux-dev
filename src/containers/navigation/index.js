import React from 'react';
import Menu from './menu';
import Logo from './logo';
import UserProfile from './userProfile';
import { Navbar, Nav } from 'react-bootstrap';

class NavIndex extends React.Component {
  render() {
    return (
      <Navbar>
        <Nav pullLeft>
          <Logo />
        </Nav>
        <Nav>
          <Menu menuRoutes={this.props.menuRoutes} />
        </Nav>
        <Nav pullRight>
          <UserProfile />
        </Nav>
      </Navbar>
    );
  }
}

export default NavIndex;
