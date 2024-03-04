// import styles from "./ItemsList.module.css";
import PropTypes from "prop-types";
import Item from "../Item/Item";

function ItemsList({ tasks, setTasks, onHandleAsDone, typeOfTasks }) {
  let toDisplayTask;

  if (typeOfTasks.toLowerCase() === "active") {
    toDisplayTask = tasks.filter((task) => task.completed === false);
  }

  if (typeOfTasks.toLowerCase() === "completed") {
    toDisplayTask = tasks.filter((task) => task.completed === true);
  }

  if (typeOfTasks.toLowerCase() === "all") {
    toDisplayTask = tasks;
  }

  return (
    <ul>
      {toDisplayTask.map((task) => (
        <Item
          toDo={task}
          setTasks={setTasks}
          key={task.id}
          onHandleAsDone={onHandleAsDone}
        />
      ))}
    </ul>
  );
}

ItemsList.propTypes = {
  tasks: PropTypes.array,
  setTasks: PropTypes.func,
  onHandleAsDone: PropTypes.func,
  typeOfTasks: PropTypes.string,
};

export default ItemsList;
