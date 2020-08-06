import React from 'react'

import GlobalStyle from './style/GlobalStyle'
import { Layout } from './components/Layout'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <NavBar />
      </Layout>
    </>
  )
}

export default App
