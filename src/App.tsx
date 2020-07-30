import React from 'react'

import GlobalStyle from './style/GlobalStyle'
import { Layout } from './components/Layout'

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        hello world
      </Layout>
    </>
  )
}

export default App
