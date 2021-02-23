import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { wrapper } from '../store'
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #FAF5FF;
    font-family: Montserrat;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
    title: '#383e71' 
  },
}

function MyApp({ Component, pageProps }) {
  return  <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
}

export default wrapper.withRedux(MyApp)
