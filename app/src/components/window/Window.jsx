import React, { Fragment } from 'react'
import * as css from './window.scss'

const Window = ({ src, title, top, right, left, bottom, loaded, loading }) => {
  const style = { top, right, left, bottom }

  return (
    <div className={`${css.window} ${css.active}`} style={style}>
      <button className={css.button}>
        <span className="fas fa-times" />
      </button>
      <div className={css.title}>{title}</div>
      <button className={css.button}>
        <span className="fas fa-window-minimize" />
      </button>
      <button className={css.button}>
        <span className="fas fa-expand-arrows-alt" />
      </button>
      <div className={css.content}>
        <iframe
          className={css.content__iframe}
          src={src}
          scrolling="yes"
          onLoad={loaded}
        />
        {loading ? <div className={css.content__loading}>Loading...</div> : ''}
        <div className={css.content__cover} />
      </div>
      <button className={`${css.button} ${css.size}`}>
        <svg viewBox="0 0 10 10">
          <line x1="0" y1="100%" x2="100%" y2="0" stroke="black" />
        </svg>
      </button>
    </div>
  )
}

export default Window
