import { Avatar } from "../Avatar/Avatar";
import { PencilLine } from "phosphor-react";
import styles from "./SidebarC.module.css";

export function SidebarC() {
  return (
    <div>
      <aside className={styles.sidebar}>
        <img
          className={styles.cover}
          src="https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=40"
        />
        <div className={styles.profile}>
          <Avatar src="https://github.com/tatiane-leal.png" />

          <strong>Tatiane Sala</strong>
          <span>Front End Developer</span>
        </div>

        <footer>
          <a href="#">
            <PencilLine size={20} />
            Edit your profile
          </a>
        </footer>
      </aside>
    </div>
  );
}
