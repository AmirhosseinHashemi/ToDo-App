// import styles from "./ItemsList.module.css";
import PropTypes from "prop-types";
import Item from "../Item/Item";

function ItemsList({ tasks, setTasks, onHandleAsDone }) {
  return (
    <ul>
      {tasks.map((task) => (
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
};

export default ItemsList;
