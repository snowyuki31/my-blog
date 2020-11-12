import React from "react"
import Layout from "../components/layout"
import Content from "../components/content"

export default function About() {
  return (
    <div>
      <Layout title="About" />
      <Content>
        <iframe
          src="https://drive.google.com/file/d/17Em7gsbBPVAzQFSrvR1oYp6rTUMiXnfZ/preview"
          width="800"
          height="800"
        ></iframe>
      </Content>
    </div>
  )
}