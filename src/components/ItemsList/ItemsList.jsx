// import styles from "./ItemsList.module.css";
import PropTypes from "prop-types";

function ItemsList({ children }) {
  return <ul>{children}</ul>;
}

ItemsList.propTypes = {
  children: PropTypes.any,
};

export default ItemsList;
