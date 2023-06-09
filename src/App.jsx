import { Post } from "./Post";
import { Header } from "./components/header/Header";

import "./global.css";
import styles from "./App.module.css";

import { Sidebar } from "./components/sidebar/Sidebar";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Tatiane Sala" content="A new day has come..." />
        </main>
      </div>
    </>
  );
}
