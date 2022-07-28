import React, { useState } from "react";

import { motion } from "framer-motion";

import "../../css/tictactoe.css";

function TicTacToe() {
  const [sign, setSign] = useState("X");
  const [tracker, setTracker] = useState(Array(16).fill(""));
  const [winner, setWinner] = useState("");

  const isWinner = (cell) => {
    if (winner === "" && cell.every((element) => element !== "")) {
      setWinner("Draw");
    }

    const winSituation = {
      samping: [
        [0, 1, 2, 3],
        [4, 5, 6, 7],
        [8, 9, 10, 11],
        [12, 13, 14, 15],
      ],
      bawah: [
        [0, 4, 8, 12],
        [1, 5, 9, 13],
        [2, 6, 10, 14],
        [3, 7, 11, 15],
      ],
      miring: [
        [0, 5, 10, 15],
        [3, 6, 9, 12],
      ],
    };

    for (let win in winSituation) {
      winSituation[win].forEach((element) => {
        if (
          cell[element[0]] === "" ||
          cell[element[1]] === "" ||
          cell[element[2]] === "" ||
          cell[element[3]] === ""
        ) {
          void 0;
        } else if (
          cell[element[0]] === cell[element[1]] &&
          cell[element[1]] === cell[element[2]] &&
          cell[element[2]] === cell[element[3]]
        ) {
          setWinner(cell[element[0]]);
        }
      });
    }
  };

  const Toc = (num) => {
    let cell = [...tracker];
    if (winner !== "") {
      alert("Silakan restart untuk bermain kembali");
      return;
    }
    if (cell[num] !== "") {
      alert("Sudah terisi!");
      return;
    }
    if (sign === "X") {
      cell[num] = "X";
      setSign("O");
    } else {
      cell[num] = "O";
      setSign("X");
    }

    isWinner(cell);
    setTracker(cell);
    // console.log(cell);
    // console.log(winner);
  };

  const CusCol = ({ num }) => {
    let colorSign = "";
    if (tracker[num] === "X") {
      colorSign = "bg-danger text-light";
    } else if (tracker[num] === "O") {
      colorSign = "bg-primary text-light";
    }
    return (
      <div
        className={`col col-lg-3 col-md-3 col-sm-3 col-height d-flex align-items-center justify-content-center border border-3 rounded ${colorSign}`}
        onClick={() => Toc(num)}
      >
        {tracker[num]}
      </div>
    );
  };

  const resetCol = () => {
    setTracker(Array(16).fill(""));
    setWinner("");
  };

  return (
    <React.Fragment>
      <motion.div
        className="container text-center my-5"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, y: 0, x: 100 }}
      >
        <div className="display-4">Tic-Tac-Toe-Tim!</div>
        <div className="container my-5 text-center field-width">
          <div className="row">
            <CusCol num={0} />
            <CusCol num={1} />
            <CusCol num={2} />
            <CusCol num={3} />
          </div>
          <div className="row">
            <CusCol num={4} />
            <CusCol num={5} />
            <CusCol num={6} />
            <CusCol num={7} />
          </div>
          <div className="row">
            <CusCol num={8} />
            <CusCol num={9} />
            <CusCol num={10} />
            <CusCol num={11} />
          </div>
          <div className="row">
            <CusCol num={12} />
            <CusCol num={13} />
            <CusCol num={14} />
            <CusCol num={15} />
          </div>
        </div>
        <div className="containet text-center">
          <p>Current player: {sign}</p>
        </div>
        {winner && (
          <div className="container">
            <p>Winner: {winner}</p>
            <button className="btn btn-warning" onClick={() => resetCol()}>
              Reset
            </button>
          </div>
        )}
      </motion.div>
    </React.Fragment>
  );
}

export default TicTacToe;
