import React from 'react'
import { Global, css } from '@emotion/react'
import globalStyles from '../styles/global-styles'
import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <Global styles={globalStyles} />
      <Navbar />
      <main
        css={css`
          margin-top: 5vh;
        `}
      >
        {children}
      </main>
      <Footer />
    </>
  )
}
