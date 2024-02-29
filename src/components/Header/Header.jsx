import ThemeButton from "../ThemeButton/ThemeButton";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1>TODO</h1>
      <ThemeButton />
    </header>
  );
}

export default Header;
