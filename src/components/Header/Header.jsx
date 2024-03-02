import PropTypes from "prop-types";
import styles from "./Header.module.css";

function Header({ children }) {
  return (
    <header className={styles.header}>
      <h1>TODO</h1>
      {children}
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.any,
};

export default Header;
