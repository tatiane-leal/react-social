import styles from "./header.module.css";
import logo from "./../../../assets/images/logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logotipo" />
      <strong>React Social Feed</strong>
    </header>
  );
}
