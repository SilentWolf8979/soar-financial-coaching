import React from "react";
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../images/icons/eagle.svg';

function Breadcrumbs() {
  return (
    <span className='breadcrumb'>
      <Link to='/' className='logo'>
        <Logo
          alt="Soar Financial Coaching"
          className="d-inline-block align-top App-logo"
          fill="#7fa67a"
          to='/'
        />
      </Link>
      <p>/</p>
      <Link to='/services'>Services Offered</Link>
    </span>
  );
}

export default Breadcrumbs;
