import React, { Component } from 'react'
import * as desktop from './desktop.scss'
import Window from '../window/Window'

class Desktop extends Component {
  constructor(props) {
    super(props)

    this.state = {
      windows: [
        {
          title: 'Never SSL',
          src: '//neverssl.com',
          top: '20px',
          left: '20px',
          right: '50px',
          bottom: '50px',
          loading: true
        }
      ]
    }
  }
  windowLoaded(window) {
    const { windows } = this.state
    window.loading = false

    this.setState({ windows })
  }

  render() {
    return (
      <div className={desktop.desktop}>
        {this.state.windows.map((window, ndx) => (
          <Window
            {...window}
            loaded={() => this.windowLoaded(window)}
            key={`window-${ndx}`}
          />
        ))}
      </div>
    )
  }
}

export default Desktop
