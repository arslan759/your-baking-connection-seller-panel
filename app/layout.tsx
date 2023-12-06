'use client'
import './globals.css'
import { PropsWithChildren } from 'react'
import { lightTheme } from './theme/themes'
import ContextProvider from './context-provider'
import { ThemeProvider, CssBaseline } from '@mui/material'
import Header from '@/components/Header'
import { usePathname } from 'next/navigation'
import Footer from '@/components/Footer/Footer'
// import NextAuthProvider from './nextAuthProvider'
import { Toaster } from 'react-hot-toast'
// import CustomAuthProvider from 'hocs/CustomAuthProvider'
// import { AuthProvider } from 'context/AuthContext'

export default function RootLayout({ children }: PropsWithChildren<{}>) {
  const router = usePathname()

  // const showHeader =
  //   router === '/signin' ||
  //   router === '/signup' ||
  //   router === '/email' ||
  //   router === '/password' ||
  //   router === '/editprofile' ||
  //   router === '/profile' ||
  //   router === '/addmember' ||
  //   router === '/allmember' ||
  //   router === '/pricingplan'
  //     ? false
  //     : true
  return (
    <html lang='en'>
      <head>
        <title>Baker Panel YBC</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </head>
      <ThemeProvider theme={lightTheme}>
        {/* <NextAuthProvider> */}
        <ContextProvider>
          <body>
            <CssBaseline />
            {/* {showHeader && <Header />} */}
            {/* <CustomAuthProvider> */}
            {<Header />}
            {children}
            {<Footer />}
            {/* </CustomAuthProvider> */}
            <Toaster
              position='bottom-center'
              reverseOrder={false}
              gutter={8}
              containerClassName=''
              containerStyle={{}}
              toastOptions={{
                // Define default options
                className: '',
                duration: 5000,
                style: {
                  fontFamily: 'Open Sans',
                  background: '#fff',
                  color: '#363636',
                },
              }}
            />
          </body>
        </ContextProvider>
        {/* </NextAuthProvider> */}
      </ThemeProvider>
    </html>
  )
}
