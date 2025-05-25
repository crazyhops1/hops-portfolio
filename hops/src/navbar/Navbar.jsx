import React from 'react';
import {Link} from'react-scroll'
import cv from '../store/resume.pdf'

const Navbar = ({}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent position-absolute top-0 start-0 w-100 px-4 z-3">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Brand / Logo */}
        <a className="navbar-brand fw-bold fs-4" style={{color:'#00CFFF'}} >Hops</a>

        {/* Nav Links */}
        <ul className="navbar-nav d-flex flex-row gap-4" >
          <li className="nav-item">
            <Link className="nav-link"  style={{color:'#ffffff',cursor:'pointer'}} to='projects'>Projects</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="skill" style={{color:'#ffffff', cursor:'pointer'}} >Skills</Link>
          </li>
           <li className="nav-item">
            <a className="btn" href={cv}  style={{color:'#ffffff', cursor:'pointer', border:'1px solid #00CFFF'}} download >CV</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
