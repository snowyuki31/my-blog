exports.createSchemaCustomization = ({ actions, schema }) => {
  // インタフェース `StaticPage` とタイプ `MdxStaticPage` を定義する
  createTypes(`
    interface StaticPage @nodeInterface {
      id: ID!
      title: String!
      slug: String!
      excerpt: String!
      body: String!
    }
  `)
  createTypes(
    schema.buildObjectType({
      name: `MdxStaticPage`,
      fields: {
        id: { type: `ID!` },
        title: { type: `String!` },
        slug: { type: `String!` },
        excerpt: {
          type: `String!`,
          args: {
            pruneLength: {
              type: `Int`,
              defaultValue: 140,
            },
          },
          resolve: mdxResolverPassthrough(`excerpt`),
        },
        body: {
          type: `String!`,
          resolve: mdxResolverPassthrough(`body`),
        },
      },
      interfaces: [`Node`, `StaticPage`],
    })
  )
}
