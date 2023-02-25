import React, { useState } from "react";
import {Link} from "react-router-dom"

const Navbar = (props) => {
  
  return (
    <div>
      <nav className={`fixed-top navbar navbar-expand-lg bg-${props.col}`}>
        <div className="container-fluid">
          <Link className={`navbar-brand text-${props.tcol}`} to="/">
            DailyNews
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link text-${props.tcol}`} to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-${props.tcol}`} to="/general">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-${props.tcol}`} to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-${props.tcol}`} to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-${props.tcol}`} to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-${props.tcol}`} to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
            
              <img onClick={props.tooglemode} src={props.im} alt="" srcset="" />
              <form className="d-flex ms-5">
        <input className="form-control me-2" value={props.value} onChange={props.searchNews} type="search" placeholder="Search" aria-label="Search"/>
        <button onClick={props.handlesn} className="btn btn-outline-success" type="submit">Search</button>
      </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
