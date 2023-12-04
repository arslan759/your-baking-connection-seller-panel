// hocs/withAuthRedirect.js

import { useEffect, useLayoutEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import useValidateViewer from '../hooks/viewer/useValidateViewer'
import { withApollo } from 'lib/apollo/withApollo'
import Loader from '@/components/Loader/Loader'
import path from 'path'

const withAuth = (WrappedComponent) => {
  const AuthRedirect = (props) => {
    const [viewer, loading] = useValidateViewer()
    const router = useRouter()
    const pathName = usePathname()

    console.log('viewer in withAuth is ', viewer)
    console.log('pathname in withAuth is ', pathName)

    // List of routes that require the user to be logged in
    const protectedRoutes = ['/profile', '/baker', '/membership', '/create-shop']

    // const validateViewer = async () => {
    //   if (!viewer?._id) {
    //     console.log('before return loading')
    //     return
    //   }

    //   // If there is no viewer, redirect to login page
    //   if (!viewer?._id && protectedRoutes.includes(pathName)) {
    //     router.push('/signin')
    //     console.log('before return no viewer redirect to login page', viewer)
    //     return
    //   }

    //   // if user is logged in and has already created a shop, redirect to home page
    //   if (viewer?._id && viewer?.adminUIShops?.length > 0 && pathName.includes('/create-shop')) {
    //     router.push('/')
    //     console.log('before return create-shop redirect to home page', viewer)
    //     return
    //   }

    //   // // If the route is protected and the user is not logged in, redirect to login page
    //   // if (
    //   //   !viewer?._id &&
    //   //   protectedRoutes.includes(pathName) &&
    //   //   pathName !== '/signin' &&
    //   //   pathName !== '/signup'
    //   //   // !loading
    //   // ) {
    //   //   router.push('/signin')
    //   //   console.log('before return protectedRoutes redirect to login page', viewer)
    //   //   return
    //   // }

    //   // If user is logged in and tries to access signin or signup page, redirect to home page
    //   if (viewer?._id && (pathName === '/signin' || pathName === '/signup')) {
    //     router.push('/')
    //     console.log('before return consolidated condition redirect to home page', viewer)
    //     return
    //   }

    //   // If the user is logged in and validStripeConnect is false, redirect to profile page
    //   if (viewer?._id && !viewer?.validStripeConnect && !pathName.includes('/profile')) {
    //     router.push('/profile')
    //     console.log('before return validStripeConnect redirect to profile page', viewer)
    //     return
    //   }
    // }

    // useLayoutEffect(() => {
    //   console.log('loading viewer is ', loading)

    //   validateViewer()
    //   // if (loading) {
    //   //   return // No need to perform further checks while loading
    //   // }

    //   // // If there is no viewer, redirect to login page
    //   // if (!viewer?._id && pathName !== '/signin' && pathName !== '/signup') {
    //   //   router.push('/signin')
    //   //   return
    //   // }

    //   // // If the route is protected and the user is not logged in, redirect to login page
    //   // if (
    //   //   !viewer?._id &&
    //   //   protectedRoutes.includes(pathName) &&
    //   //   pathName !== '/signin' &&
    //   //   pathName !== '/signup'
    //   // ) {
    //   //   router.push('/signin')
    //   //   return
    //   // }

    //   // // Consolidated condition to handle redirects
    //   // if (
    //   //   viewer?._id &&
    //   //   (pathName === '/signin' || pathName === '/signup') &&
    //   //   viewer?.adminUIShops?.length > 0
    //   // ) {
    //   //   router.push('/')
    //   //   return
    //   // }

    //   // // If the user is logged in and validStripeConnect is false, redirect to profile page
    //   // if (
    //   //   viewer?._id &&
    //   //   !viewer?.validStripeConnect &&
    //   //   pathName !== '/profile'
    //   //   // viewer?.adminUIShops?.length > 0
    //   // ) {
    //   //   router.push('/profile')
    //   //   return
    //   // }
    // }, [loading, viewer?._id, pathName])

    // if (
    //   (!viewer?._id && pathName === '/signin' && !loading) ||
    //   (!viewer?._id && pathName === '/signup' && !loading)
    // ) {
    //   return (
    //     <>
    //       <WrappedComponent {...props} />
    //     </>
    //   )
    // }

    // if (
    //   loading ||
    //   (!viewer?._id && protectedRoutes.includes(pathName)) ||
    //   (viewer?._id && viewer?.adminUIShops?.length > 0 && pathName.includes('/create-shop')) ||
    //   (viewer?._id && (pathName === '/signin' || pathName === '/signup')) ||
    //   (viewer?._id && !viewer?.validStripeConnect && !pathName.includes('/profile'))
    // ) {
    //   console.log('loading is ', loading)
    //   return (
    //     <>
    //       <Loader />
    //     </>
    //   )
    // }

    console.log('loading is wrapped ', props)

    return <WrappedComponent {...props} />
  }

  return AuthRedirect
}

export default withAuth
