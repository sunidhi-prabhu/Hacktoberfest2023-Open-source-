import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  // Corrected the function names
  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={increase}>Click to Increase</button>
      <button onClick={decrease}>Click to Decrease</button>
    </>
  );
}

export default App;
