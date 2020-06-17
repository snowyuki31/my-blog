import React from "react"
import Styles from "./content.module.scss"

export default function Content({ children }) {
  return (
    <div className={Styles.content}>{children}</div>
  )
}