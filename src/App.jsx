import { Post } from "./components/Post/Post";

import "./global.css";
import styles from "./App.module.css";
import { HeaderC } from "./components/HeaderC/HeaderC";
import { SidebarC } from "./components/SidebarC/SidebarC";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/tatiane-leal.png",
      name: "Tatiane Sala",
      role: "Front End Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galera" },
      { type: "paragraph", content: "Eis um novo projeto" },
      { type: "link", content: "linkaqui" },
    ],
    publishedAt: new Date("2022-05-30 21:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/gabriel-leal.png",
      name: "Gabriel Sala",
      role: "Front End Developer",
    },
    content: [
      { type: "paragraph", content: "Ola" },
      { type: "paragraph", content: "um novo post" },
      { type: "link", content: "outrolink" },
    ],
    publishedAt: new Date("2022-05-20 20:00:00"),
  },
];

export function App() {
  return (
    <>
      <HeaderC />
      <div className={styles.wrapper}>
        <SidebarC />

        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
