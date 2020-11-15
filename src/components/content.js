import React from "react"
import Styles from "./content.module.scss"

const styles = { whiteSpace: 'pre-line' };

export default function Content({ children }) {
  return (
    <div>
      <div className={Styles.content}>
         <div style={styles}>{children}</div>
      </div>
    </div>
  )
}