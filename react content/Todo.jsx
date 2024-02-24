import React, { useState } from "react";

function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit() {
    // tasks.push(inputValue)

    // SPREAD SYNTAX
    setTasks([...tasks, inputValue]);
  }

  return (
    // FOR & FOREACH cannot be used inside return, as they don't have any return value
    <>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleSubmit}>Add Task</button>
      <ul>
        {tasks.map((task, index) => {
          return <li key={index}>{task}</li>;
        })}
      </ul>
    </>
  );
}

export default Todo;
