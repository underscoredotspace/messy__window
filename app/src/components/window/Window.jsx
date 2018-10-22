import React, { Fragment } from 'react'
import styles from './window.scss'

const Window = ({ someText }) => {
  return (
    <Fragment>
      <p className={styles.window}>{`My ${someText} Window`}</p>
    </Fragment>
  )
}

export default Window
