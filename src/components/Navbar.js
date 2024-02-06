import React from "react";
import PropTypes from "prop-types";
//import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
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
              {/* <Link className="nav-link active" aria-current="page" to="/"> */}
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li> */}
          </ul>
          {/*<form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
  </form>*/}
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Dark Mode
            </label>
          </div>
          {/*
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              //ye wala  maine khuds e add kiya hai red aur green mode
              className="form-check-input"
              onClick={props.toggleMode1}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Red Mode
            </label>
          </div>

          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              //ye wala  maine khuds e add kiya hai red aur green mode
              className="form-check-input"
              onClick={props.toggleMode2}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Green Mode
            </label>
          </div>
          */}
        </div>
      </div>
    </nav>
  );
}

//upaar dehkho navbar me maine props liyabhai to props rehte ki uch value mai change karna chaoata hu to mai props ke maadad se la rsakhta hu and jo mai app.js me title dunga to vahi title dikhega tumko badiya se

Navbar.propTypes = {
  title: PropTypes.string.isRequired, //iska matlab haii jaruri hai bhejna merko
};
//iska matlab ye bo rahe hai ki bhai title string hi hona chaiye aurbagar koi dusra kuch diya to error aaega maan lo numer diya to error throw karige

//sab kuch smjhne ke liye react js ki doc me dekho bahut hi badiya doc hai

//dfalut me kya rehta ki mai props to pass kar rah hu aur agar maine nahi bheje to tum ye wale hi values default me le lena

Navbar.defaultProps = {
  title: "Set Title here",
};
