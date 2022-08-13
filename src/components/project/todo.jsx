import React, { useState, useContext } from "react";
import { useOutletContext } from "react-router-dom";

import { ThemeContext } from "../../helper/todoCont";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen, faPlus } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

// context

// const todoFromLocalStorage = JSON.parse(localStorage.getItem("myToDo") || "[]");

function Todo() {
  // const [a, aa] = useOutletContext();
  // const [todo, setTodo] = useState(todoFromLocalStorage);
  const [todo, setTodo] = useOutletContext();
  const { theme, setTheme, toggleTheme } = useContext(ThemeContext);

  // temp data
  const [task, setTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  // add task
  const addTask = () => {
    if (task) {
      let num = todo.length + 1;
      let newEntry = { id: num, title: task, endDate: "1-1-1", status: false };
      setTodo([...todo, newEntry]);
      setTask("");
    }
  };

  const deleteTask = (id) => {
    let newTask = todo.filter((x) => x.id !== id);
    setTodo(newTask);
  };

  const markDoneTask = (id) => {
    let markDone = todo.map((x) => {
      if (x.id === id) {
        return { ...x, status: !x.status };
      }
      return x;
    });
    setTodo(markDone);
  };

  const updateTask = (task) => {
    let findData = todo.map((x) => {
      if (x.id === task.id) {
        return { ...x, title: task.title };
      }
      return x;
    });
    setTodo(findData);
  };

  return (
    <>
      <motion.div
        className="container text-center my-5 shadow-sm p-3 rounded"
        initial={{ opacity: 0, y: 100, scale: 0.2 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.3 }, scale: 1 }}
        exit={{ opacity: 0, y: 0, x: window.innerWidth, duration: 2 }}
      >
        <div className="container">
          <form>
            <div className="input-group mb-3">
              <input
                value={task}
                type="text"
                className="form-control"
                placeholder="Add yout things here"
                aria-label="Add yout things here"
                aria-describedby="button-addon2"
                onChange={(e) => setTask(e.target.value)}
              />
              <button
                className="btn btn-outline-success"
                type="button"
                id="button-addon2"
                onClick={addTask}
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </form>
        </div>
        <div className="container">
          <div className="collapse" id="collapseExample">
            <div className="card card-body">
              <div className="card-body">
                <h5 className="card-title mb-3">Edit task</h5>
                <form>
                  <div className="input-group mb-3">
                    <input
                      value={updateData && updateData.title}
                      type="text"
                      className="form-control"
                      placeholder="Add yout things here"
                      aria-label="Add yout things here"
                      aria-describedby="button-addon2"
                      onChange={(e) =>
                        setUpdateData({ ...updateData, title: e.target.value })
                      }
                    />
                    <button
                      className="btn btn-outline-warning"
                      type="button"
                      id="button-addon2"
                      onClick={() => updateTask(updateData)}
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      <FontAwesomeIcon icon={faPen} />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container my-5 table-responsive">
          <table
            className={
              "table align-middle " +
              (theme === "dark" ? "table-dark" : "table-light")
            }
          >
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Task</th>
                <th scope="col">Deadline</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {todo &&
                todo.map((task, index) => {
                  return (
                    <tr
                      className={task.status ? "table-success" : ""}
                      key={task.id}
                    >
                      <th scope="row">{index + 1}</th>
                      <td onClick={(e) => markDoneTask(task.id)}>
                        {task.title}
                      </td>
                      <td onClick={(e) => markDoneTask(task.id)}>
                        {task.endDate}
                      </td>
                      <td onClick={(e) => markDoneTask(task.id)}>
                        <span
                          className={
                            "badge " +
                            (task.status ? "bg-success" : "bg-warning")
                          }
                        >
                          {task.status ? "Selesai" : "Belum"}
                        </span>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger mx-1 my-1"
                          onClick={() => deleteTask(task.id)}
                        >
                          <FontAwesomeIcon
                            icon={faTrash}
                            className="text-white"
                          />
                        </button>
                        <button
                          className="btn btn-warning"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseExample"
                          aria-expanded="false"
                          aria-controls="collapseExample"
                          onClick={(e) =>
                            setUpdateData({ id: task.id, title: task.title })
                          }
                        >
                          <FontAwesomeIcon
                            icon={faPen}
                            className="text-white"
                          />
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </motion.div>
    </>
  );
}

export default Todo;
