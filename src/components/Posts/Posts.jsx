import { Comment } from "../Comment/Comment";
import { Avatar } from "../Avatar/Avatar";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import styles from "./Posts.module.css";
import { useState } from "react";

export let Posts = ({ author, content, role, publishedAt }) => {
  // O use state é usado para monitorar os estados dos elementos em tela, nós passamos como parametro o valor inicial da variavel que queremos alterar.

  const [comments, setComments] = useState([]);

  const [contentOfTextArea, setContentOfTextArea] = useState("");

  const dateNormalized = format(publishedAt, `dd' de 'LLLL', 'yyyy`, {
    locale: ptBR,
  });

  const publishedDateRealativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });
  // A função abaixo monitora oq está sendo escrito na text area e armazena na variavel contentOfTextArea, o monitoramento é feito atraves do on change. da forma que eu uso o set abaixo ele pega o ultimo valor registrado pelo on change.
  const handleCommentsChanges = (e) => {
    setContentOfTextArea(e.target.value);
  };

  const handleCommentsSubmit = (e) => {
    e.preventDefault();

    /* ...comments, isso se chama spread operator, o react pega os elementos que ja estão dentro do array e adiciona um elemento a frente do ultimo elemento do arary. */
    /* Para inserir algum elemento em um array é preciso declarar o set da forma abaixo, com uma chaves dentro do mesmo. O set espera receber o tipo da variavel declarada no momento do use State */
    setComments([...comments, contentOfTextArea]);
    setContentOfTextArea("");
  };

  // O set content of text area acima está retornando o valor de content of text area para string vazia. esse valor está sendo jogado no text area.

  const deleteComment = (boxCommentToDelete) => {

    const newArrayOfComments = comments.filter(
      (comment) => comment != boxCommentToDelete
    );
    if (newArrayOfComments.length == 0) {
      setComments([]);
    } else {
      setComments(newArrayOfComments);
    }
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
                return <p key={content.content}>{content.content}</p>;
              } else if (content.type === "link") {
                return (
                  <p key={content.content}>
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
            name="content"
            onSubmit={handleCommentsSubmit}
          >
            <div className={styles.leaveYourFeedBack}>
              <label>Deixe seu feedback</label>
            </div>
            <div className={styles.boxToComment}>
              <textarea
                placeholder="Escreva seu comentário"
                className={styles.comments}
                name="content"
                value={contentOfTextArea}
                onChange={handleCommentsChanges}
              />
            </div>
            <button className={styles.sendButton} type="submit">
              <strong>Publicar</strong>
            </button>
          </form>
        </footer>
        {comments.map((comment) => {
          return (
            <Comment
              key={content.content}
              content={comment}
              deleteComment={deleteComment}
            />
          );
        })}
      </article>
    </>
  );
};
