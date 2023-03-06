import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import type { AppProps } from 'next/app'
import theme from '../lib/theme'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
