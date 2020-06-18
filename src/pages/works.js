import React from "react"
import Layout from "../components/layout"
import Card from "../components/card"
import Content from "../components/content"

import Portfolio from "../images/Portfolio.png"

export default function Works() {
  return (
    <div>
      <Layout title="Works" />
      <Content>
        <Card
          title="ポートフォリオ + ブログ"
          image={Portfolio}
          description="このサイトです。Gatsbyで構築しています。"
          tag="HTML/CSS/React/Gatsby/AWS Amplify"
          link="https://github.com/snowyuki31/my-blog"
          linkname="Github"
        />
        <Card />
      </Content>
    </div>
  )
}
