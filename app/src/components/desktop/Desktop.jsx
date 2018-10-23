import React, { Component } from 'react'
import Window from '../window/Window'
import './desktop.scss'

class Desktop extends Component {
  constructor(props) {
    super(props)

    this.state = {
      windows: [
        {
          title: 'Never SSL',
          src: '//underscore.space',
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
      <div className="desktop">
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
