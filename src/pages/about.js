import React from "react"
import Layout from "../components/layout"
import Content from "../components/content"

export default function About() {
  return (
    <div>
      <Layout title="About" />
      <Content>
        <iframe
          src="https://drive.google.com/file/d/1etUS-Jnu6yro6zCG8i4XvLv4wXq4zOV2/preview"
          width="800"
          height="800"
        ></iframe>
      </Content>
    </div>
  )
}