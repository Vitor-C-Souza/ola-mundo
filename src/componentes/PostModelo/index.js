import OutroPost from './OutroPost/index.js'
import styles from './PostModel.module.css'
import React from 'react'

export default function PostModelo({ fotoCapa, titulo, children }) {
  return (
    <article className={styles.postModeloContainer}>
        <div 
            className={styles.fotoCapa}
            style={{backgroundImage: `url(${fotoCapa})` }}
        ></div>

        <h2 className={styles.titulo}>
            {titulo}
        </h2>
        <div className={styles.postConteudoContainer}>
            {children}
        </div>
        <OutroPost style={styles}/>
    </article>
  )
}
