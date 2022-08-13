import React, { useState } from "react";

import { motion } from "framer-motion";

import "../../css/calculator.css";

function Calculator() {
  const [curDig, setCurDig] = useState("");
  const [lastDig, setLastDig] = useState("");

  const ops = ["/", "*", "+", "-", "."];
  const opsnod = ["/", "*", "+", "-"];

  const addDigit = (val) => {
    if (
      (ops.includes(val) && curDig === "") ||
      (ops.includes(val) && ops.includes(curDig.slice(-1)))
    ) {
      return;
    }
    if (val === "." && curDig.includes(".")) {
      return;
    }
    if (val === "0" && curDig === "") {
      return;
    }

    if (opsnod.includes(val)) {
      setLastDig(lastDig + curDig + val);
      setCurDig("");
    } else {
      setCurDig(curDig + val);
    }
  };

  const evalAll = () => {
    const result = eval(lastDig + curDig).toString();
    if (result === "0") {
      setCurDig("");
    } else {
      setCurDig(result);
    }
    setLastDig("");
  };

  const deleteAllDigit = () => {
    setCurDig("");
  };

  return (
    <React.Fragment>
      <motion.div
        className="container text-center p-5 calc-width shadow-lg my-5"
        initial={{ opacity: 0, y: 100, scale: 0.2 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.3 }, scale: 1 }}
        exit={{ opacity: 0, y: 0, x: window.innerWidth, duration: 2 }}
      >
        <div className="row calc-border">
          <div className="col col-lg-12 py-1 text-end px-4 rounded border border-primary bg-light">
            <div className="text-right">
              <p className="lead text-break">{lastDig || "0"}</p>
            </div>
            <div className="text-right display-4">
              <p className="text-break">{curDig || "0"}</p>
            </div>
          </div>
        </div>
        <div className="row py-3">
          <div className="col d-grid">
            <button
              className="button btn-lg btn-info text-light btn-block"
              type="button"
              onClick={() => addDigit("/")}
            >
              /
            </button>
          </div>
          <div className="col d-grid">
            <button
              className="button btn-lg btn-info text-light btn-block"
              type="button"
              onClick={() => addDigit("*")}
            >
              *
            </button>
          </div>
          <div className="col d-grid">
            <button
              className="button btn-lg btn-info text-light btn-block"
              type="button"
              onClick={() => addDigit("+")}
            >
              +
            </button>
          </div>
          <div className="col d-grid">
            <button
              className="button btn-lg btn-info text-light btn-block"
              type="button"
              onClick={() => addDigit("-")}
            >
              -
            </button>
          </div>
          <div className="col d-grid">
            <button
              className="button btn-lg btn-danger text-light btn-block"
              type="button"
              onClick={() => deleteAllDigit()}
            >
              <b>DEL</b>
            </button>
          </div>
        </div>
        <div className="row py-3">
          <motion.div className="col d-grid" whileHover={{ scale: 1.2 }}>
            <button
              className="button btn-lg btn-light text-dark btn-block"
              type="button"
              onClick={() => addDigit("1")}
            >
              1
            </button>
          </motion.div>
          <motion.div className="col d-grid" whileHover={{ scale: 1.2 }}>
            <button
              className="button btn-lg btn-light text-dark btn-block"
              type="button"
              onClick={() => addDigit("2")}
            >
              2
            </button>
          </motion.div>
          <div className="col d-grid">
            <button
              className="button btn-lg btn-light text-dark btn-block"
              type="button"
              onClick={() => addDigit("3")}
            >
              3
            </button>
          </div>
        </div>
        <div className="row py-3">
          <div className="col d-grid">
            <button
              className="button btn-lg btn-light text-dark btn-block"
              type="button"
              onClick={() => addDigit("4")}
            >
              4
            </button>
          </div>
          <div className="col d-grid">
            <button
              className="button btn-lg btn-light text-dark btn-block"
              type="button"
              onClick={() => addDigit("5")}
            >
              5
            </button>
          </div>
          <div className="col d-grid">
            <button
              className="button btn-lg btn-light text-dark btn-block"
              type="button"
              onClick={() => addDigit("6")}
            >
              6
            </button>
          </div>
        </div>
        <div className="row py-3">
          <div className="col d-grid">
            <button
              className="button btn-lg btn-light text-dark btn-block"
              type="button"
              onClick={() => addDigit("7")}
            >
              7
            </button>
          </div>
          <div className="col d-grid">
            <button
              className="button btn-lg btn-light text-dark btn-block"
              type="button"
              onClick={() => addDigit("8")}
            >
              8
            </button>
          </div>
          <div className="col d-grid">
            <button
              className="button btn-lg btn-light text-dark btn-block"
              type="button"
              onClick={() => addDigit("9")}
            >
              9
            </button>
          </div>
        </div>
        <div className="row py-3">
          <div className="col d-grid">
            <button
              className="button btn-lg btn-light text-dark btn-block"
              type="button"
              onClick={() => addDigit(".")}
            >
              .
            </button>
          </div>
          <div className="col d-grid">
            <button
              className="button btn-lg btn-light text-dark btn-block"
              type="button"
              onClick={() => addDigit("0")}
            >
              0
            </button>
          </div>
          <div className="col d-grid">
            <button
              className="button btn-lg btn-success text-light btn-block"
              type="button"
              onClick={() => evalAll()}
            >
              =
            </button>
          </div>
        </div>
      </motion.div>
    </React.Fragment>
  );
}

export default Calculator;
