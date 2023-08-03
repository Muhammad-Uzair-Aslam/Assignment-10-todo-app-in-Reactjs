import React, { useState } from "react";
import "../list/List.css";

export default function Todolist() {
  const [Todolist, setTodolist] = useState();
  const [taskadd, setTaskadd] = useState([]);

  const Writetask = (e) => {
    setTodolist(e.target.value);
  };
  const addTask = () => {
    setTaskadd((taskadd) => {
      const updateTask = [...taskadd, Todolist];
      console.log(updateTask);
      return updateTask;
    });

    setTodolist("");
  };

  function deleteItem(id) {
    const updatedTasks = taskadd.filter((task, index) => index !== id);
    setTaskadd(updatedTasks);
  }

  return (
    <div className="main-body">
      <div className="main-Card">
        <div className="card1">
          <div className="inputfield">
            <input
              type="text"
              value={Todolist}
              onChange={Writetask}
              placeholder="Add new task"
            />
            <button onClick={addTask}>Add Task</button>
          </div>
        </div>
        <div className="card1">
          <h2>TASK LIST</h2>
          <div className="card-1">
            {taskadd.map((e, id) => {
              return (
                <>
                  <li style={{ textDecoration: "none", listStyle: "none" }}>
                    <div className="task-list">
                      <div className="task-detail">
                        <p>{e}</p>
                      </div>
                      <div className="btn">
                        <button>edit</button>
                        <button onClick={() => deleteItem(id)}>Delete</button>
                      </div>
                    </div>
                  </li>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
