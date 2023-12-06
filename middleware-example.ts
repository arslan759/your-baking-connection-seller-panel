export { default } from 'next-auth/middleware'

export const config = {
  matcher: ['/profile/:path*', '/about-bakers/:path*', '/baker/:path*', '/membership'],
}
