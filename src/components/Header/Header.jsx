import Input from "../Input/Input";
import ThemeButton from "../ThemeButton/ThemeButton";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1>TODO</h1>
      <ThemeButton />
      <Input />
    </header>
  );
}

export default Header;
