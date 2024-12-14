import { useState } from "react";
import "./App.css";
import ValueDisplay from "./components/valueDisplay";

function App() {
  const [value, setValue] = useState("");
  return (
    <>
      <h1>Current and Previous Value Display</h1>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
      />
      <ValueDisplay value={value} />
    </>
  );
}

export default App;
