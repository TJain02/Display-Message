import "./styles.css";
import Message from "./messageDisplay";
import { useState } from "react";
export default function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState(false);

  const clickHandler = (e) => {
    e.preventDefault();
    if (name.length > 0) {
      setMessage(true);
    }
  };

  const submitHandler = (e) => {
    setMessage(false);
    setName(e.target.value);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <form onSubmit={clickHandler}>
        <label>
          Enter your name:{" "}
          <input required type="text" value={name} onChange={submitHandler} />
        </label>
        <button type="submit">Show welcome message </button>
      </form>
      {message && <Message name={name} />}
    </div>
  );
}
