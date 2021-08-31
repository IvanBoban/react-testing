import "./App.css";
import { useState } from "react";

function App() {
  const [text, setText] = useState("Unclicked");

  const setNewText = () => setText("Clicked");

  return (
    <div className="App">
      <header>{text}</header>
      <button onClick={setNewText}>Klik</button>
    </div>
  );
}

export default App;
