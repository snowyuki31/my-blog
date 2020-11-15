import React from "react"
import Layout from "../components/layout"
import Content from "../components/content"

export default function About() {
  return (
    <div>
      <Layout title="About" />
      <Content>
        <div class="google_drive">
          <iframe
            src="https://drive.google.com/file/d/1TKI522-9Fh6eZndT6I7JmmGSvgDAEBaA/preview"
            width="800"
            height="1100"
          ></iframe>
        </div>
      </Content>
    </div>
  )
}