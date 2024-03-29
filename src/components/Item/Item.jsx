import PropTypes from "prop-types";
import styles from "./Item.module.css";

function Item({ toDo, setTasks, onHandleAsDone }) {
  function handleDeleteItem() {
    setTasks((preTasks) =>
      preTasks.filter((taskObj) => taskObj.id !== toDo.id)
    );
  }

  return (
    <li className={styles.item}>
      <input
        type="radio"
        name=""
        id=""
        checked={toDo.completed}
        onChange={() => onHandleAsDone(toDo.id)}
      />
      <p>{toDo.description}</p>
      <button onClick={handleDeleteItem} aria-label="delete todo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="#494C6B"
          className="w-4 h-4"
        >
          <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
        </svg>
      </button>
    </li>
  );
}

Item.propTypes = {
  description: PropTypes.string,
  toDo: PropTypes.object,
  setTasks: PropTypes.func,
  onHandleAsDone: PropTypes.func,
};

export default Item;
