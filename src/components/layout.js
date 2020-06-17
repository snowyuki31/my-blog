import React from "react"
import { Link } from "gatsby"
import Styles from "./layout.module.scss"
import SEO from "./seo"

export default function Layout({ title, children }) {
  return (
    <div id="wrapper">
      <SEO title={title}></SEO>
      <div className={Styles.header}>
        <div className={Styles.title_area}>
          <div className={Styles.title}>
            <h1><Link to="/">SNOW'S <br></br> PORTFOLIO</Link></h1>
          </div>
        </div>
      </div>

      <div className={Styles.nav}>
        <ul>
          <li><div className={(title === "Home" ? Styles.btn_now : Styles.btn)}><Link to="/">HOME</Link></div></li>
          <li><div className={(title === "About" ? Styles.btn_now : Styles.btn)}><Link to="/about">ABOUT</Link></div></li>
          <li><p className={(title === "Works" ? Styles.btn_now : Styles.btn)}><Link to="/works">WORKS</Link></p></li>
          <li><p className={(title === "Blog" ? Styles.btn_now : Styles.btn)}><Link to="/blog">BLOG</Link></p></li>
        </ul>
      </div>

      { children }
    </div>
  )
}