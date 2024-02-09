import styles from "./Sidebar.module.css";

import { PencilLine } from "phosphor-react";

import { Avatar } from "../Avatar/Avatar";

export let Sidebar = () => {
  return (
    <>
      <div className={styles.boxHeader}>
        <img
          src="https://images.unsplash.com/photo-1566837945700-30057527ade0?w=500&auto=format&fit=crop&q=30&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D"
          alt="Imagem de fundo do profile"
        />
        <div className={styles.profilePhoto}>
          <Avatar retireMarginLeft hasBorder src="https://github.com/gustavonBrito.png" />
        </div>
      </div>
      <div className={styles.personInformation}>
        <strong>Gustavo Brito</strong>
        <p className={styles.role}>Back End Developer</p>
      </div>
      <div className={styles.profileButtonField}>
        <div className={styles.borderButton}></div>
        <a href="#">
          <PencilLine size={20} />
          <strong>Editar seu perfil</strong>
        </a>
      </div>
    </>
  );
};
