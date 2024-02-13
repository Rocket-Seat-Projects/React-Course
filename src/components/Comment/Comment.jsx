import styles from "./Comment.module.css";

import { Trash, ThumbsUp } from "phosphor-react";

import { Avatar } from "../Avatar/Avatar";

import { useState } from "react";

export let Comment = ({ content, deleteComment }) => {


  /*   const [commentToExclude, setCommentToExclude] = useState([allComments]);

  const excludeAComment = () => {
    console.log(commentToExclude);
    setCommentToExclude(commentToExclude.length - 1);
    return commentToExclude;
  }; */

  const handleDeleteComment = () => {
    deleteComment(content);
  };

  return (
    <>
      <div className={styles.commentSection}>
        <main className={styles.commentMain}>
          <Avatar
            hasBorder={false}
            src="https://github.com/gustavonBrito.png"
          />
          <div className={styles.commentedBox}>
            <div>
              <strong>Gustavo</strong>
              <button className={styles.trashIcon} title="Deletar comentário"
                onClick={handleDeleteComment}
              >
                <Trash size={"24"} />
              </button>
            </div>
            <span>Cerca de 1 h</span>
            <p>{content}</p>
          </div>
        </main>
        <footer>
          <div>
            <button className={styles.thumbsUp} title="Curtir">
              <ThumbsUp size={20} />
              Aplaudir <span>03</span>
            </button>
          </div>
        </footer>
      </div>
    </>
  );
};
