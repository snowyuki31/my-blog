import React from "react"
import { Link } from "gatsby"
import Styles from "./layout.module.scss"
import SEO from "./seo"

export default function Layout({ title, children, ...props }) {
  return (
    <div className={Styles.page_gray}>
      <SEO title={title}></SEO>
      <div className={Styles.header}>
        <div className={Styles.title_area}>
          <div className={Styles.title}>
            <h1><Link to="/">SNOW'S <br></br> PORTFOLIO</Link></h1>
          </div>
        </div>
      </div>

      <div className={Styles.nav}>
          <div className={(title === "Home" ? Styles.btn_now : Styles.btn)}><Link to="/">HOME</Link></div>
          <div className={(title === "About" ? Styles.btn_now : Styles.btn)}><Link to="/about">ABOUT</Link></div>
          <p className={(title === "Works" ? Styles.btn_now : Styles.btn)}><Link to="/works">WORKS</Link></p>
        <p className={((title === "Blog" && !props.post) ? Styles.btn_now : Styles.btn)}><Link to="/blog">BLOG</Link></p>
      </div>

      { children }
    </div>
  )
}