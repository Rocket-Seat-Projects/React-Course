// Isto abaixo se chama function export, estou exportando a propia função, caso eu altere o nome dessa função eu tenho que alterar no arquivo que a está usando também.

// O react usa className por conta do "class" do javascript

// Ao utilizar o css modules, eu preciso importar o styles para usar o modules

import styles from "../Header/Header.module.css";

import igniteLogo from "../../assets/igniteLogo.svg";

export let Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <img src={igniteLogo} alt="Simbolo Ignite aqui" />
        <h1>Ignite Feed</h1>
      </header>
    </div>
  );
};
