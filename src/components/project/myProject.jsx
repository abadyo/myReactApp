import React, { useState, useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";

import { motion } from "framer-motion";

import { ThemeContext } from "../../helper/todoCont";

import "../../css/myProject.css";

function ProjectPage() {
  const [todo, setTodo] = useState([
    { id: 0, title: "tes", endDate: "1-1-1", status: false },
  ]);
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <div
        className={
          "container text-center my-5 " +
          (theme === "dark" ? "text-light" : "text-dark")
        }
      >
        <div>
          <h1>My Project</h1>
          <p className="lead">Liat Project yang saya buat!</p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col col-lg-4 col-md-6 col-sm-12 border-right">
              <div className="container p-3 shadow-sm text-center">
                <h4 className="dislpay-4">Projects</h4>
                <hr />
                <div className="list-group">
                  <NavLink
                    to="/projects/calculator"
                    className="list-group-item list-group-item-action border-0"
                  >
                    Calculator
                  </NavLink>
                  <NavLink
                    to="/projects/tictactoe"
                    className="list-group-item list-group-item-action border-0"
                  >
                    Tic-Tac-Toe-Tim
                  </NavLink>
                  <NavLink
                    to="/projects/todo"
                    className="list-group-item list-group-item-action border-0"
                  >
                    Todo List
                  </NavLink>
                  <NavLink
                    to="/projects/countdown"
                    className="list-group-item list-group-item-action border-0"
                  >
                    Count Down
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col col-lg-8 col-md-6 col-sm-12">
              <div className="container">
                <Outlet context={[todo, setTodo]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectPage;
