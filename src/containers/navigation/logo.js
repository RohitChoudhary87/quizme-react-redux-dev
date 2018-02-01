import React from 'react';
import { Link } from 'react-router-dom';

class Logo extends React.Component {
  render() {
    return (
      <li role="presentation">
        <Link to="/">
          <b>Sapinet Logo</b>
        </Link>
      </li>
    );
  }
}

export default Logo;
