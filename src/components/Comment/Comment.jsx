import styles from "./Comment.module.css";

import { Trash, ThumbsUp } from "phosphor-react";

import {Avatar} from "../Avatar/Avatar"

export let Comment = () => {
  return (
    <>
      <div className={styles.commentSection}>
        <main className={styles.commentMain}>
          <Avatar src="https://github.com/gustavonBrito.png"/>
          <div className={styles.commentedBox}>
            <div>
              <strong>Gustavo</strong>
              <button className={styles.trashIcon} title="Deletar comentário">
                <Trash size={"24"}  />
              </button>
            </div>
            <span>Cerca de 1 h</span>
          </div>
        </main>
        <footer>
          <div>
            <button className={styles.thumbsUp} title="Curtir">
              <ThumbsUp size={20}  />
              Aplaudir <span>03</span>
            </button>
          </div>
        </footer>
      </div>
    </>
  );
};
