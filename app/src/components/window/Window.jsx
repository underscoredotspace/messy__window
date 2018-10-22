import React, { Fragment } from 'react'
import * as window from './window.scss'

const Window = ({ someText }) => {
  const style = {
    left: '10px',
    top: '10px',
    width: '300px',
    height: '200px'
  }

  console.log({ window })

  return (
    <div className={window.window} style={style}>
      <button className={window.window__button}>
        <i className="fas fa-times" />
      </button>
      <div className={window.window__title} />
      <button className={window.window__button}>
        <i className="fas fa-window-minimize" />
      </button>
      <button className={window.window__button}>
        <i className="fas fa-expand-arrows-alt" />
      </button>
      <div className={window.window__content}>
        <iframe
          className={window.window__content__iframe}
          src="about:blank"
          scrolling="yes"
        />
        <div className={window.window__content__loading}>Loading...</div>
        <div className={window.window__content__cover} />
      </div>
      <button className={`${window.window__button} ${window.size}`}>
        <svg viewBox="0 0 10 10">
          <line x1="0" y1="100%" x2="100%" y2="0" stroke="black" />
        </svg>
      </button>
    </div>
  )
}

export default Window
