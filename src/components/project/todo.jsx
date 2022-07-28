import React, { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState();
  return (
    <>
      <div className="container text-center my-5 shadow-sm p-3 rounded">
        <div className="container">
          <form>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Add yout things here"
                aria-label="Add yout things here"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-outline-success"
                type="button"
                id="button-addon2"
              >
                +
              </button>
            </div>
          </form>
        </div>
        <div className="container"></div>
      </div>
    </>
  );
}

export default Todo;
