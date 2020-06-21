import React from "react"

import Layout from "gatsby-theme-blog/src/components/layout"
import SEO from "gatsby-theme-blog/src/components/seo"
import Footer from "gatsby-theme-blog/src/components/home-footer"
import PostList from "gatsby-theme-blog/src/components/post-list"

const Posts = ({ location, posts, siteTitle, socialLinks }) => (
  <Layout location={location} title={siteTitle} post={false}>
    <SEO title="Blog" />
    <main>
      <PostList posts={posts} />
    </main>
    <Footer socialLinks={socialLinks} />
  </Layout>
)

export default Posts