import styles from "./Input.module.css";

function Input() {
  return (
    <form className={styles.form}>
      <input type="radio" name="" id="" disabled={true} />
      <input
        className={styles.input}
        type="text"
        placeholder="Create new todo"
      ></input>
    </form>
  );
}

export default Input;
