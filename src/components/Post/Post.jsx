import styles from "./Post.module.css";

export function Post() {
  return (
    <div>
      <article className={styles.post}>
        <header className={styles.postHeader}>
          <div className={styles.author}>
            <img
              className={styles.avatar}
              src="https://github.com/tatiane-leal.png"
            />
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
      </article>
    </div>
  );
}
