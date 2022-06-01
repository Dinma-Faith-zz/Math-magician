import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

class NavBar extends React.PureComponent {
  render() {
    return (
      <header className="nav">
        <h1>Math Magicians</h1>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/calculator"> Calculator</Link>
          <Link to="/quotes"> Quote</Link>
        </nav>
      </header>
    );
  }
}
export default NavBar;
