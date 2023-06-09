import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img
        className={styles.avatar}
        src="https://github.com/tatiane-leal.png"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Tatiane Sala</strong>

              <time title="June 9th at 08:40am" dateTime="2023-06-09 08:40:00">
                Published around 1 hour ago
              </time>
            </div>

            <button title="Delete comment">
              <Trash size={20} />
            </button>
          </header>
          <p>That's great! Congratulations!</p>
        </div>
        <footer>
          {/* This button does not need a title attr because it has a text "Cheer up" */}
          <button>
            <ThumbsUp />
            Cheer up<span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
