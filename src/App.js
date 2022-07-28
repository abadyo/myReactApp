import "./App.css";
import React, { useContext } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import StayComp from "./components/stayComp";
import Calculator from "./components/project/calculator";
import Home from "./components/home";
import ProjectPage from "./components/project/myProject";
import Logined from "./components/loginPage/main";
import TicTacToe from "./components/project/tictactoe";
import Todo from "./components/project/todo";

function App() {
  const location = useLocation();
  // const transition = useTransition(location, (location) => location.pathname, {
  //   from: { opacity: 0, transform: "translate(100%, 0)" },
  //   enter: { opacity: 1, transform: "translate(%, 0)" },
  //   leave: { opacity: 0, transform: "translate(-50%, 0)" },
  // });

  return (
    <React.Fragment>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<StayComp />}>
            <Route index element={<Home />} />
            <Route
              path="projects"
              element={<ProjectPage />}
              location={location}
              key={location.pathname}
            >
              <Route path="calculator" element={<Calculator />} />
              <Route path="tictactoe" element={<TicTacToe />} />
              <Route path="todo" element={<Todo />} />
            </Route>
          </Route>
        </Routes>
      </AnimatePresence>
    </React.Fragment>
  );
}

export default App;
