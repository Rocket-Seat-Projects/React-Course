import { Comment } from "../Comment/Comment";
import { Avatar } from "../Avatar/Avatar";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import styles from "./Posts.module.css";
import { useState } from "react";

export let Posts = ({ author, content, role, publishedAt }) => {
  // O use state é usado para monitorar os estados dos elementos em tela, nós passamos como parametro o valor inicial da variavel que queremos alterar.

  const comments = useState([]);

  const dateNormalized = format(publishedAt, `dd' de 'LLLL', 'yyyy`, {
    locale: ptBR,
  });

  const publishedDateRealativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  let commentsNumber = 0;

  const handleCommentsSubmit = (e) => {
    e.preventDefault();
    commentsNumber += 1;

    comments.push(commentsNumber);
    console.log(comments);
  };

  return (
    <>
      <article className={styles.post}>
        <header>
          <Avatar
            hasBorder
            src="https://i.pinimg.com/736x/b5/1d/a7/b51da7c67ca0744ef903bd7866101e37.jpg"
          />
          <div className={styles.informationAboutPost}>
            <div className={styles.userInformationOnPost}>
              <strong>{author}</strong>
              <span>{role}</span>
            </div>
            <time
              title={dateNormalized}
              dateTime={publishedAt.toISOString()}
              className={styles.publishTime}
            >
              {publishedDateRealativeToNow}
            </time>
          </div>
        </header>
        <main>
          <div className={styles.postMainContent}>
            {content.map((content) => {
              if (content.type === "paragraph") {
                return <p>{content.content}</p>;
              } else if (content.type === "link") {
                return (
                  <p>
                    <a href={content.content} target="#" rel="#"></a>
                  </p>
                );
              }
            })}

            <a href="">jane.design/doctorcare</a>
            <a href="">#novoprojeto #nlw #rocketseat</a>
          </div>
          <div className={styles.contentBorder}></div>
        </main>
        <footer>
          <form
            className={styles.commentForm}
            action=""
            onSubmit={handleCommentsSubmit}
          >
            <div className={styles.leaveYourFeedBack}>
              <label>Deixe seu feedback</label>
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
        {comments.map((comment) => {
          return <Comment />;
        })}
      </article>
    </>
  );
};
