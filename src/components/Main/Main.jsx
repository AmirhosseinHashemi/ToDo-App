import styles from "./Main.module.css";
import PropTypes from "prop-types";

function Main({ children }) {
  return <main className={styles.main}>{children}</main>;
}

Main.propTypes = {
  children: PropTypes.any,
};

export default Main;
