import React from "react"
import Styles from "./card.module.scss"

export default function Card({title, ...props}) {
  return (
    <div className={Styles.card_area}>
      <div className={Styles.card}>
        <img src={props.image} width="250"></img>
        <div className={Styles.textarea}>
          <div className={Styles.title}> {title} </div>
          <div className={Styles.description}> {props.description} </div>
          <div className={Styles.skills}> {props.tag} </div>
          <div className={Styles.link}><a href={props.link} target="_new">{props.linkname}</a></div>
        </div>
      </div>
    </div>
  )
}