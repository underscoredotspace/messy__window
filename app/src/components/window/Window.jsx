import React from 'react'
import './window.scss'

const Window = ({ src, title, top, right, left, bottom, loaded, loading }) => {
  const style = { top, right, left, bottom }
  const active = true

  return (
    <div className={`${active ? 'active ' : ''}window`} style={style}>
      <button className="close">
        <i className="fas fa-times" />
      </button>
      <div className="title">{title}</div>
      <button className="min">
        <i className="fas fa-window-minimize" />
      </button>
      <button className="max">
        <i className="fas fa-expand-arrows-alt" />
      </button>
      <div className="content">
        <iframe className="iframe" onLoad={loaded} src={src} scrolling="yes" />
        {loading ? <div className="loading">Loading...</div> : ''}
        <div className="cover" />
      </div>
      <button className="size">
        <svg viewBox="0 0 10 10">
          <line x1="0" y1="100%" x2="100%" y2="0" stroke="black" />
        </svg>
      </button>
    </div>
  )
}

export default Window
