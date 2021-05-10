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
      { window.location.pathname.startsWith('/services') ? <><Link to='/services'>Services Offered</Link></> : null }
      { window.location.pathname.startsWith('/content') ? <><Link to='/content'>Content</Link></> : null }
    </span>
  );
}

export default Breadcrumbs;
