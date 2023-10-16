import nextAuth from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      shopId: string
      loginResult: {
        tokens: {
          accessToken: string
          refreshToken: string
        }
      }
    }
  }
}
