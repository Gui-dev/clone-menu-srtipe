import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    font-size: 62.5%;
    min-height: 100%;
    background-color: #202020;
  }

  *, button, input {
    font-family: Roboto -apple-system, system-ui, sans-serif;
    border: 0;
    background-color: none;
  }

  ul {
    list-style: none;
  }
`
