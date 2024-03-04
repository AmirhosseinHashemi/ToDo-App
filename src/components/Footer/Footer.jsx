import PropTypes from "prop-types";
import styles from "./Footer.module.css";

function Footer({
  unCompletedTaskNumbers,
  onClearCompleted,
  setTypeOfTasks,
  typeOfTasks,
}) {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer__clear"]}>
        <p>
          <span>{unCompletedTaskNumbers}</span> items left
        </p>
        <button onClick={onClearCompleted}>Clear Completed</button>
      </div>

      <div className={styles["footer__filtering"]}>
        <button
          onClick={(e) => setTypeOfTasks(e.target.innerText)}
          className={
            typeOfTasks.toLowerCase() === "all" ? styles["activeBtn"] : ""
          }
        >
          All
        </button>
        <button
          className={
            typeOfTasks.toLowerCase() === "active" ? styles["activeBtn"] : ""
          }
          onClick={(e) => setTypeOfTasks(e.target.innerText)}
        >
          Active
        </button>
        <button
          className={
            typeOfTasks.toLowerCase() === "completed" ? styles["activeBtn"] : ""
          }
          onClick={(e) => setTypeOfTasks(e.target.innerText)}
        >
          Completed
        </button>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  unCompletedTaskNumbers: PropTypes.number,
  onClearCompleted: PropTypes.func,
  setTypeOfTasks: PropTypes.func,
  typeOfTasks: PropTypes.string,
};

export default Footer;
