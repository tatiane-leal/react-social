import { Post } from "./components/Post/Post";

import "./global.css";
import styles from "./App.module.css";
import { HeaderC } from "./components/HeaderC/HeaderC";
import { SidebarC } from "./components/SidebarC/SidebarC";

export function App() {
  return (
    <>
      <HeaderC />
      <div className={styles.wrapper}>
        <SidebarC />

        <main>
          <Post />
          <Post />
          <Post />
        </main>
      </div>
    </>
  );
}
