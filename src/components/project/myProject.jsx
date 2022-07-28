import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

function ProjectPage() {
  return (
    <>
      <div className="container text-center my-5">
        <h1 className="display-4">This is project</h1>
        <p className="lead">Liat Project yang saya buat!</p>
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
                </div>
              </div>
            </div>
            <div className="col col-lg-8 col-md-6 col-sm-12">
              <div className="container">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectPage;
