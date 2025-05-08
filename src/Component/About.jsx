import { useState } from "react";

const About = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const doubleinc = () => setCount((prevCount) => prevCount + 2);
  const doubledec = () => setCount((prevCount) => prevCount - 2);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Counter:{count}</h1>
      <button onClick={increment}> Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={doubledec}>doubledec</button>
      <button onClick={reset}>Reset</button>
      <button onClick={doubleinc}>Double</button>
    </div>
  );
};

export default About;
