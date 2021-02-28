import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/react'

const Navbar = () => {
  return (
    <nav
      css={css`
        padding: 1rem;

        ul {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      `}
    >
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
