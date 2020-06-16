import React from "react"
import { Styled } from "theme-ui"
import "katex/dist/katex.min.css"

/**
 * Change the content to add your own bio
 */

export default function Bio() {
  return (
    <>
      This is where <Styled.a href="http://example.com/">your name</Styled.a>
      {` `}
      goes.
      <br />
      Or whatever, you make the rules.
    </>
  )
}
