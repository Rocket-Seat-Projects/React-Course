// Esse arquivo tem a função de escrever o que vai em tela, como se eu estivesse escrevendo o html.

// JSX é javascript + xml, xml é a linguagem de marcação que o html usa.

// A importação da function export tem que ser entre "{}".

import { Header } from "./components/Header/Header";

import { Sidebar } from "./components/SideBar/Sidebar";

import { Posts } from "./components/Posts/Posts";

import "./global.css";

import styles from "./App.module.css";

function App() {
  const posts = [
    {
      author: "Gustavo Brito",
      post: [
        { type: "paragraph", content: "Fala galeraa 👋" },
        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        { type: "link", content: "jane.design/doctorcare" },
      ],
      role: "Admin",
      publishedAt: new Date("2024-02-09 11:29:00"),
    },
    {
      author: "Gustavo Silva",
      post: [
        { type: "paragraph", content: "Fala galeraa 👋" },
        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        { type: "link", content: "jane.design/doctorcare" },
      ],
      role: "User",
      publishedAt: new Date("2024-02-09 11:29:00"),
    },
  ];
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <aside className={styles.sideBar}>
          <Sidebar />
        </aside>
        <main className={styles.timeLine}>
          {posts.map((post) => {
            return (
              <Posts
                author={post.author}
                content={post.post}
                role={post.role}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
