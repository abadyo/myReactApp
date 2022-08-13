import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "../helper/todoCont";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import Navbar from "./navbar";

import "../css/stayComp.css";
import "../css/theme.css";

function StayComp() {
  const { theme, setTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Navbar />
      <div className="min-vh-100">
        <Outlet />
      </div>
      <button
        id="button-perm"
        className={
          "btn rounded-circle " + (theme === "dark" ? "btn-light" : "btn-dark")
        }
        onClick={toggleTheme}
      >
        <FontAwesomeIcon icon={theme === "dark" ? faMoon : faSun} />
      </button>
      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                About
              </a>
            </li>
          </ul>
          <p className="text-center text-muted">© 2021 Company, Inc</p>
        </footer>
      </div>
    </>
  );
}

export default StayComp;
