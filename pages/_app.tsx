import type { AppProps } from 'next/app'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import UserAuthorizationProvider from 'lib/Auth/UserAuthorizationProvider'

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <UserAuthorizationProvider>
        <Component {...pageProps} />
      </UserAuthorizationProvider>
    </ThemeProvider>
  )
}
