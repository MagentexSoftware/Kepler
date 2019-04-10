import React from 'react'
import styles from './index.module.css'

export default class BottomBar extends React.Component {
  render() {
    return (
      <div className={styles.BottomBar}>
        <div>{this.props.children}Left</div>
        <div>Right</div>
      </div>
    )
  }
}
