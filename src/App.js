import React, { useState } from "react";
import ToDoList from "./ToDoList";
export default function App() {
  const [task, setTask] = useState("");
  const [data, setData] = useState([]);
  const handleOnChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const toDoList = [...data, task];
    // setData(toDoList);
    setData([...data, task]);
    setTask("");
  };
  return (
    <div>
      <center>
        <h4>ToDo List</h4>
        <form onSubmit={handleSubmit}>
          <input type="text" value={task} onChange={handleOnChange} />
          &nbsp;&nbsp;
          <button type="submit">Add</button>
        </form>
        {/* {data.map((task, index) => (
        <div key={index}>{task}</div>
      ))} */}
        <ToDoList toDoList={data} />
      </center>
    </div>
  );
}
