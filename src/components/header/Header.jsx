import React from 'react';
import './Header.css';
import { Divider } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import Teasers from './Teasers';

const Header = () => (
  <>
    <div className="headerBlock">
      <div className="headerName">
        <p><NavLink to="/">SST</NavLink></p>
      </div>
      <div className="headerContent">
        <p>Ongoing</p>
        <Teasers />
        <p>Contact</p>
      </div>
    </div>
    <Divider />
  </>
);

export default Header;
