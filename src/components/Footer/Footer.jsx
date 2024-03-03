import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer__clear"]}>
        <p>
          <span>X</span> items left
        </p>
        <button>Clear Completed</button>
      </div>

      <div className={styles["footer__filtering"]}>
        <button className={styles["activeBtn"]}>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </footer>
  );
}

export default Footer;
