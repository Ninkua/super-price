import { ChakraProvider } from "@chakra-ui/react"
import { AppProps } from "next/app"
import { AuthProvider } from "../contexts/AuthContext"
import { SidebarDrawerProvider } from "../contexts/SidebarDrawerContext"

import { theme } from "../styles/theme"


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>

      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>
    </AuthProvider>

  )
}
export default MyApp
