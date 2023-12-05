// hocs/withAuthRedirect.js

import { useEffect, useLayoutEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import useValidateViewer from '../hooks/viewer/useValidateViewer'
import { withApollo } from 'lib/apollo/withApollo'
import Loader from '@/components/Loader/Loader'

const withAuth = (WrappedComponent) => {
  const AuthRedirect = (props) => {
    const [viewer, loading] = useValidateViewer()
    const router = useRouter()
    const pathName = usePathname()

    console.log('viewer in withAuth is ', viewer)
    console.log('pathname in withAuth is ', pathName)

    // List of routes that require the user to be logged in
    const protectedRoutes = ['/profile', '/baker', '/membership', '/create-shop']

    // Check weather any of the protected routes string is present in the current path
    const isProtectedRoute = protectedRoutes.some((route) => pathName.includes(route))

    const validateViewer = async () => {
      if (loading) {
        console.log('before return loading')
        const temp = protectedRoutes.includes(pathName)
        console.log('before return isProtectedRoute is ', isProtectedRoute)
        return
      }

      // If there is no viewer and page is protected, redirect to login page
      if (!viewer?._id && isProtectedRoute) {
        router.push('/signin')
        console.log('before return no viewer redirect to login page', viewer)
        console.log('before return isProtectedRoute is ', isProtectedRoute)
        return
      }

      // If there is no viewer and page is signin or signup, return
      if (!viewer?._id && (pathName === '/signin' || pathName === '/signup')) {
        console.log('before return no viewer signin or signup', viewer)
        return
      }

      // If the user is logged in and page is signin or signup, redirect to home page
      if (viewer?._id && (pathName === '/signin' || pathName === '/signup')) {
        router.push('/')
        console.log('before return viewer signin or signup redirect to home page', viewer)
        return
      }

      // if user is logged in and has already created a shop and page is create-shop, redirect to home page
      if (viewer?._id && viewer?.adminUIShops?.length > 0 && pathName.includes('/create-shop')) {
        router.push('/')
        console.log('before return viewer create-shop redirect to home page', viewer)
        return
      }

      // if the user is logged in and has not created a shop and page is not create-shop, redirect to create-shop page
      if (viewer?._id && viewer?.adminUIShops?.length === 0 && !pathName.includes('/create-shop')) {
        router.push('/create-shop')
        console.log('before return viewer no create-shop redirect to create-shop page', viewer)
        return
      }

      // If the user is logged in and validStripeConnect is false and have created a shop, redirect to profile page
      if (
        viewer?._id &&
        !viewer?.validStripeConnect &&
        !pathName.includes('/profile') &&
        viewer?.adminUIShops?.length > 0
      ) {
        router.push('/profile')
        console.log('before return validStripeConnect redirect to profile page', viewer)
        return
      }
    }

    useLayoutEffect(() => {
      console.log('loading viewer is ', loading)

      validateViewer()
    }, [loading, viewer?._id, pathName])

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

    if (
      loading ||
      (!viewer?._id && isProtectedRoute) ||
      // (!viewer?._id && (pathName === '/signin' || pathName === '/signup')) ||
      (viewer?._id && (pathName === '/signin' || pathName === '/signup')) ||
      (viewer?._id && viewer?.adminUIShops?.length > 0 && pathName.includes('/create-shop')) ||
      (viewer?._id &&
        !viewer?.validStripeConnect &&
        !pathName.includes('/profile') &&
        viewer?.adminUIShops?.length > 0)
    ) {
      console.log('loading is ', loading)
      return (
        <>
          <Loader />
        </>
      )
    }

    console.log('loading is wrapped ', props)

    return <WrappedComponent {...props} />
  }

  return AuthRedirect
}

export default withAuth
