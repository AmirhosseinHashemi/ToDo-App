import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Input.module.css";

function Input({ setTasks }) {
  const [input, setInput] = useState("");

  function handleSubmitInput(ev) {
    ev.preventDefault();

    const newTask = {
      id: crypto.randomUUID().slice(-12),
      description: input,
    };

    setTasks((preTasks) => [...preTasks, newTask]);
    setInput("");
  }

  return (
    <form className={styles.form} onSubmit={handleSubmitInput}>
      <input type="radio" name="" id="" disabled={true} />
      <input
        value={input}
        className={styles.input}
        type="text"
        placeholder="Create new todo"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></input>
    </form>
  );
}

Input.propTypes = {
  setTasks: PropTypes.func,
};

export default Input;
