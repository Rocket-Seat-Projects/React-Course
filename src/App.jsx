// Esse arquivo tem a função de escrever o que vai em tela, como se eu estivesse escrevendo o html.

// JSX é javascript + xml, xml é a linguagem de marcação que o html usa.

// A importação da function export tem que ser entre "{}".

import { Header } from "./components/Header/Header";

import { Sidebar } from "./components/SideBar/Sidebar";

import { Posts } from "./components/Posts/Posts";

import "./global.css";

import styles from "./App.module.css";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <aside className={styles.sideBar}>
          <Sidebar />
        </aside>
        <main className={styles.timeLine}>
          <Posts />
          <Posts />
        </main>
      </div>
    </div>
  );
}

export default App;
