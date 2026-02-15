import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div class="container p-1">
        <Link class="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            alt="Logo"
            style={{ width: "20%" }}
          />
          Digital Krishi
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav mb-lg-0 align-items-center">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/app">
                  App
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link active" to="/library">
                  Library
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/news">
                  News
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link active" to="/about">
                  About
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link active" to="/b2bsolutions">
                  B2B Solutions
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/app"
                  className="btn btn-primary p-1 rounded-pill"
                  style={{ width: "135px", marginLeft: "14rem"}}
                >
                  Get the App
                </Link>
              </li>

            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
