/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Gatsby Tutorial',
    description: 'some random description',
    author: 'John Doe',
    data: ['item 1', 'item 2', 'item3'],
    person: { name: 'pete', age: 99 },
  },
  plugins: [`gatsby-plugin-emotion`],
}
