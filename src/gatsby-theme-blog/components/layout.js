import React from "react"
import { css, Styled } from "theme-ui"
import useBlogThemeConfig from "gatsby-theme-blog/src/hooks/configOptions"
import Helmet from "react-helmet"

import Layout from "../../components/layout"
import "katex/dist/katex.min.css"

export default ({ children, ...props }) => {
  const blogThemeConfig = useBlogThemeConfig()
  const { webfontURL } = blogThemeConfig

  return (
    <div>
      <Helmet>
        <link rel="stylesheet" href={webfontURL} />
      </Helmet>

      <Layout />
      <Styled.root>
      <div>
        <div
          css={css({
            maxWidth: `container`,
            mx: `auto`,
            px: 3,
            py: 4,
          })}
        >
          {children}
        </div>
        </div>
      </Styled.root>
    </div>
  )
}
