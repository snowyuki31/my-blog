import React from "react"
import { Link } from "gatsby"
import Styles from "./index.module.scss"

export default function Home() {
  return (
    <div id="wrapper">
      <div id="header">HOME PAGE</div>

      <div className={Styles.nav}>
        <ul>
          <li><p className={Styles.btn}><Link to="/">HOME</Link></p></li>
          <li><p className={Styles.btn}><Link to="/about">ABOUT</Link></p></li>
          <li><p className={Styles.btn}><Link to="/works">WORKS</Link></p></li>
          <li><p className={Styles.btn}><Link to="/blog">BLOG</Link></p></li>
        </ul>
      </div>
    </div>
  )
}