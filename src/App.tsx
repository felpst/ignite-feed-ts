import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/61332644?v=4",
      name: "Felipe Veloso",
      role: "CEO @ Quaq"
    },
    content: [
      { type: "paragraph", content: "Fala galera!", },
      { type: "paragraph", content: "Saiu atualização do Quaq!", },
      { type: "link", content: "www.quaq.me", },
    ],
    publishedAt: new Date('2022-08-22 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/61332644?v=4",
      name: "Daniel Rigoni",
      role: "CTO @ Quaq"
    },
    content: [
      { type: "paragraph", content: "Fala galera!", },
      { type: "paragraph", content: "Saiu atualização do Quaq!", },
      { type: "link", content: "www.quaq.me", },
    ],
    publishedAt: new Date('2022-08-20 20:00:00')
  },
]

function App() {

  return (
    <div>

      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>

    </div>
  )
}

export default App
