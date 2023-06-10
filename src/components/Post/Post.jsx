import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header className={styles.postHeader}>
        <div className={styles.author}>
          <Avatar src="https://github.com/tatiane-leal.png" />

          <div className={styles.authorInfo}>
            <strong>Tatiane Sala</strong>
            <span>Front End Developer</span>
          </div>
        </div>

        <time title="June 9th at 08:40am" dateTime="2023-06-09 08:40:00">
          Published 1 hour ago
        </time>
      </header>

      <div className={styles.content}>
        <p>Hi everyone!</p>

        <p>I have just published my new portfolio!</p>

        <p>
          <span>You can check it out at </span>
          <span>
            <a href="https://tatiane-leal.github.io/" target="_blank">
              tatiane-leal.github.io
            </a>
          </span>
        </p>

        <p>
          <a href="#"> #newportfolio</a>
          <a href="#"> #projects</a>
          <a href="#"> #showcase</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Comment section</strong>

        <textarea placeholder="Leave a comment" />

        <footer>
          <button type="submit">Publish</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
