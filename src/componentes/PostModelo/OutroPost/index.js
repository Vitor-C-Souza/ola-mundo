import React from "react";
import posts from "json/posts.json";
import { useLocation } from "react-router-dom";
import PostCard from "componentes/PostCard/index.js";
import styles from "paginas/inicio/inicio.module.css";

export default function OutroPost({ style }) {
  const location = useLocation();

  return (
    <>
      <div className={style.titulo} style={ {fontSize: '1.5rem'}}>
        <h1>Outros Posts</h1>
      </div>

      <ul className={styles.posts}>
        {posts.map((post) =>
          location.pathname !== `/posts/${post.id}` ? (
            <li key={post.id}>
              <PostCard post={post} />
            </li>
          ) : (
            ""
          )
        )}
      </ul>
    </>
  );
}
