import React, { useState, useContext, useRef, useEffect } from "react";

import { ThemeContext } from "../../helper/todoCont";

import "../../css/countDown.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

function CountDown() {
  const { theme } = useContext(ThemeContext);
  const [aSecond, setSecond] = useState("00");
  const [aMinute, setMinute] = useState("00");
  const [aHour, setHour] = useState("00");
  const [aDay, setDay] = useState("00");

  const [target, setTarget] = useState("0"); // "August 29, 2022 10:00:00"

  const [tanggal, setTanggal] = useState("0");
  const changeTanggal = (x) => {
    setTanggal(x);
  };

  const [bulan, setBulan] = useState("0");
  const changeBulan = (x) => {
    setBulan(x);
  };

  const [tahun, setTahun] = useState("1999");
  const changeTahun = (x) => {
    setTahun(x);
  };

  const setDeadline = (e) => {
    e.preventDefault();
    if (bulan === "0" || bulan === "Month" || bulan === null) {
      toast.error("Add month");
    } else if (tanggal === "0" || tanggal === "Tanggal" || tanggal === null) {
      toast.error("Add Date");
    } else {
      const x = tanggal + " " + bulan + " " + tahun;
      setTarget(x);
    }
  };

  let interval = useRef();

  const startTimer = () => {
    const countToDate = new Date(target).getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countToDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setSecond(seconds);
        setMinute(minutes);
        setHour(hours);
        setDay(days);
      }
    }, 1000);
  };

  // CdM
  useEffect(() => {
    startTimer();
    // return () => {
    //   clearInterval(interval.current);
    // };
  });

  return (
    <>
      <motion.div
        className={
          "container-fluid my-5 text-center" +
          (theme === " dark" ? "text-light" : "text-dark")
        }
        initial={{ opacity: 0, y: 100, scale: 0.2 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.3 }, scale: 1 }}
        exit={{ opacity: 0, y: 0, x: window.innerWidth, duration: 2 }}
      >
        <div className="container-fluid rounded-pill shadow-sm p-5 cdt">
          <span className="badge bg-primary mx-1">{aDay}</span>
          <span> Day </span>
          <span className="badge bg-primary mx-1">{aHour}</span>
          <span> Hour </span>
          <span className="badge bg-primary mx-1">{aMinute}</span>
          <span> Minute </span>
          <span className="badge bg-primary mx-1">{aSecond}</span>
          <span> Seconds</span>
        </div>

        <div className="container my-3">
          <form>
            <div className="row my-5">
              <div className="col col-lg-4 col-md-12 cold-sm-12">
                <input
                  className="form-control form-control-sm"
                  type="text"
                  placeholder="Tahun"
                  value={tahun}
                  onChange={(e) => changeTahun(e.target.value)}
                />
              </div>
              <div className="col col-lg-4 col-md-12 cold-sm-12">
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  value={bulan}
                  onChange={(e) => changeBulan(e.target.value)}
                >
                  <option defaultValue>Month</option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="Desember">Desember</option>
                </select>
              </div>
              <div className="col col-lg-4 col-md-12 cold-sm-12">
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  value={tanggal}
                  onChange={(e) => changeTanggal(e.target.value)}
                >
                  <option defaultValue>Tanggal</option>
                  {[...Array(31)].map((e, i) => (
                    <option key={i + 1}>{i + 1}</option>
                  ))}
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-warning"
              onClick={setDeadline}
            >
              Set
            </button>
            <ToastContainer />
          </form>
        </div>
      </motion.div>
    </>
  );
}

export default CountDown;
