import { useState } from "react";

// DOM MANIPULATION is not done by the user in React. The librabry itself handles that part

// STATE VARIABLES ARE IMMUTABLE, you cannot modify them directly

function Counter() {
  // let counter = 0;

  // DESTRUCTURING (MDN)
  let [counter, setCounter] = useState(0);


  function increment() {
    setCounter(counter + 1);
  }
  function decrement() {
    setCounter(counter - 1);
  }
  return (
    <>
      <button onClick={increment}>INCREMENT</button>
      <p>{counter}</p>
      <button onClick={decrement}>DECREMENT</button>
    </>
  );
}

export default Counter;
