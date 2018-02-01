import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

class MenuList extends React.Component {
  render() {
    const { menuRoutes, match } = this.props;
    return (
      <Nav>
        {menuRoutes.map(route => (
          <li role="presentation" key={route.path}>
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
      </Nav>
    );
  }
}

export default MenuList;
