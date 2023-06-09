import styles from "./Post.module.css";

export function Post() {
  return (
    <div>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <img
              className={styles.avatar}
              src="https://github.com/tatiane-leal.png"
            />
            <div className={styles.authorInfo}>
              <div>
                <strong>Tatiane Sala</strong>
                <span>Front End Developer</span>
              </div>
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
            You can check it out at
            <a href="#">
              {" "}
              https://github.com/tatiane-leal/tatiane-leal.github.io
            </a>
          </p>

          <p>
            <a href="#"> #newportfolio #projects #showcase</a>
          </p>
        </div>
      </article>
    </div>
  );
}
