import { useState } from "react";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter((counter) => counter + 1);
    // alert("Clicked");
  };
  return (
    <div>
      <p>Hello Nisha</p>
      <button onClick={handleClick}>Click Me</button>
      <p>{counter}</p>
    </div>
  );
};

export default App;
