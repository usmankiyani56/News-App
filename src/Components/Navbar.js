// Navbar.jsx

import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid ">
            <Link className="navbar-brand text-light" to="/">
              NewsMonkey
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item ">
                  <Link className="nav-link active text-light" aria-current="page" to="publishedAt">
                    Home
                  </Link>
                </li>
                <Link className="nav-link text-light" aria-current="page" to="relevancy">Relevancy</Link>
                <Link className="nav-link active text-light" aria-current="page" to="popularity">
                  Popularity
                </Link>
                <Link className="nav-link active text-light" aria-current="page" to="publishedAt">
                  PublishedAt
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
