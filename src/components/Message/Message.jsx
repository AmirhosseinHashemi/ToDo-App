import PropTypes from "prop-types";
import styles from "./Message.module.css";

function Message({ message }) {
  return <p className={styles.message}>{message}</p>;
}

Message.propTypes = {
  message: PropTypes.string,
};

export default Message;
