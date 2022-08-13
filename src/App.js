import "./App.css";
import React, { useContext, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import { ThemeContext } from "./helper/todoCont";

import StayComp from "./components/stayComp";
import Calculator from "./components/project/calculator";
import Home from "./components/home";
import ProjectPage from "./components/project/myProject";
import TicTacToe from "./components/project/tictactoe";
import Todo from "./components/project/todo";
import CountDown from "./components/project/countdown";

function App() {
  const location = useLocation();
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((x) => (x === "light" ? "dark" : "light"));
  };

  return (
    <React.Fragment>
      <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
        <div className="theme" id={theme}>
          <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<StayComp />}>
                <Route index element={<Home />} />
                <Route path="projects" element={<ProjectPage />}>
                  <Route path="calculator" element={<Calculator />} />
                  <Route path="tictactoe" element={<TicTacToe />} />
                  <Route path="todo" element={<Todo />} />
                  <Route path="countdown" element={<CountDown />} />
                </Route>
              </Route>
            </Routes>
          </AnimatePresence>
        </div>
      </ThemeContext.Provider>
    </React.Fragment>
  );
}

export default App;
