import PropTypes from "prop-types";
// import styles from "./Message.module.css";

function Message({ message }) {
  return <p>{message}</p>;
}

Message.propTypes = {
  message: PropTypes.string,
};

export default Message;
