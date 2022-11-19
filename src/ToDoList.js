import React from "react";

export default function ToDoList({ toDoList }) {
  return (
    <div>
      {toDoList.map((task, index) => (
        <div key={index}>{task}</div>
      ))}
    </div>
  );
}
