import React from 'react'
import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'
import globalStyles from '../styles/global-styles'
import Navbar from './navbar'
import Footer from './footer'

const Wrap = styled.div`
  padding: 1rem;
`

export default function Layout({ children }) {
  return (
    <Wrap>
      <Global styles={globalStyles} />
      <Navbar />
      <main
        css={css`
          margin: 10vh 0;

          h3 {
            text-align: center;
            margin-bottom: 5rem;
          }
        `}
      >
        {children}
      </main>
      <Footer />
    </Wrap>
  )
}
