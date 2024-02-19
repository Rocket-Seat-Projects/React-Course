import styles from "./Comment.module.css";

import { Trash, ThumbsUp } from "phosphor-react";

import { Avatar } from "../Avatar/Avatar";

import { useState } from "react";

import { Modal } from "../Modal/Modal";

export let Comment = ({ content, deleteComment }) => {
  let [likes, setLikes] = useState(0);

  const handleDeleteComment = () => {
    deleteComment(content);
  };

  const handleModal = () => {};

  const handleThumbsUp = () => {
    if (likes >= 1) {
      setLikes((likes -= 1));
    } else {
      setLikes((likes += 1));
    }
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
              <button
                className={styles.trashIcon}
                title="Deletar comentário"
                onClick={handleDeleteComment}
              >
                <Trash onClick={handleModal} size={"24"} />
              </button>
            </div>
            <span>Cerca de 1 h</span>
            <p>{content}</p>
          </div>
          <Modal />
        </main>
        <footer>
          <div>
            <button
              className={styles.thumbsUp}
              title="Curtir"
              onClick={handleThumbsUp}
            >
              <ThumbsUp size={20} />
              Aplaudir <span>{likes}</span>{" "}
{/*               <span
                className={likes >= 1 ? !styles.notAllowed : styles.notAllowed}
              >
                Não é permitido mais de um like
              </span> */}
            </button>
          </div>
        </footer>
      </div>
    </>
  );
};
