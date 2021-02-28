import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const getData = graphql`
  {
    site {
      info: siteMetadata {
        description
        title
      }
    }
  }
`

const Header = () => {
  const {
    site: {
      info: { description, title },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      <h4>title: {title}</h4>
      <p>description: {description}</p>
    </div>
  )
}

export default Header
