import { Comment } from "../Comment/Comment";
import { Avatar } from "../Avatar/Avatar";
import styles from "./Posts.module.css";

export let Posts = () => {
  return (
    <>
      <article className={styles.post}>
        <header>
          <Avatar src="https://i.pinimg.com/736x/b5/1d/a7/b51da7c67ca0744ef903bd7866101e37.jpg" />
          <div className={styles.informationAboutPost}>
            <div className={styles.userInformationOnPost}>
              <strong>Gustavo Silva</strong>
              <span>Dev Front End</span>
            </div>
            <time
              title="29 de Janeiro,2024"
              dateTime="2024-29-01 20:14:00"
              className={styles.publishTime}
            >
              <p>Publicado há 1h</p>
            </time>
          </div>
        </header>
        <main>
          <div className={styles.postMainContent}>
            <p>Fala galeraa 👋</p>
            <p>
              Acabei de subir mais um projeto no meu portifa. É um projeto que
              fiz no NLW Return, evento da Rocketseat. O nome do projeto é
              DoctorCare 🚀
            </p>
            <a href="">jane.design/doctorcare</a>
            <a href="">#novoprojeto #nlw #rocketseat</a>
          </div>
          <div className={styles.contentBorder}></div>
        </main>
        <footer>
          <form className={styles.commentForm} action="">
            <div className={styles.leaveYourFeedBack}>
              <label for="comments">Deixe seu feedback</label>
            </div>
            <div className={styles.boxToComment}>
              <textarea
                placeholder="Escreva seu comentário"
                className={styles.comments}
              />
            </div>
            <button className={styles.sendButton} type="submit">
              <strong>Publicar</strong>
            </button>
          </form>
        </footer>
        <Comment />
        <Comment />
      </article>
    </>
  );
};
