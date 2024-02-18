import styles from "./Modal.module.css";

export let Modal = ({hasModal}) => {
  
  return (
    <>
      <dialog>
        <h1>Excluir comentário</h1>
        <p>Você tem certeza que gostaria de excluir este comentário?</p>
        <div className={styles.buttonDialog}>
          <button className={styles.cancelButton}>
            <p>Cancelar</p>
          </button>
          <button className={styles.excludeButton}>
            <p>Sim, excluir</p>
          </button>
        </div>
      </dialog>
    </>
  );
};
