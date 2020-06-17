import React from "react"
import { Link } from "gatsby"
import Styles from "./layout.module.scss"
import SEO from "./seo"

export default function Layout({ children }) {
  return (
    <div id="wrapper">
      <SEO></SEO>
      <div className={Styles.header}>
        <div className={Styles.title_area}>
          <div className={Styles.title}>
            <h1><Link to="/">SNOW'S</Link></h1><h1><Link to="/">PORTFOLIO</Link></h1>
          </div>
        </div>
      </div>

      <div className={Styles.nav}>
        <ul>
          <li><p className={Styles.btn}><Link to="/">HOME</Link></p></li>
          <li><p className={Styles.btn}><Link to="/about">ABOUT</Link></p></li>
          <li><p className={Styles.btn}><Link to="/works">WORKS</Link></p></li>
          <li><p className={Styles.btn}><Link to="/blog">BLOG</Link></p></li>
        </ul>
      </div>

      { children }
    </div>
  )
}