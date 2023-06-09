import { Header } from "./components/header/Header";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Post } from "./components/Post/Post";

import "./global.css";
import styles from "./App.module.css";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
        </main>
      </div>
    </>
  );
}
