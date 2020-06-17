import React from "react"
import { Link } from "gatsby"
import Styles from "./index.module.scss"
import SEO from "../components/seo"

export default function Home() {
  return (
    <div className={Styles.page}>
      <SEO></SEO>
      <div className={Styles.header}>
        <div className={Styles.title_area}>
          <div className={Styles.title}>
            <h1>SNOW'S</h1><h1>PORTFOLIO</h1>
          </div>
        </div>
      </div>

      <div className={Styles.nav}>
        <p className={Styles.btn_now}><p>HOME</p></p>
        <p className={Styles.btn}><Link to="/about">ABOUT</Link></p>
        <p className={Styles.btn}><Link to="/works">WORKS</Link></p>
        <p className={Styles.btn}><Link to="/blog">BLOG</Link></p>
      </div>
    </div>
  )
}