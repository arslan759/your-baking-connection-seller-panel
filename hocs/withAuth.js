// hocs/withAuthRedirect.js

import { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import useViewer from '../hooks/viewer/useViewer'
import { withApollo } from 'lib/apollo/withApollo'
import Loader from '@/components/Loader/Loader'

const withAuth = (WrappedComponent) => {
  const AuthRedirect = (props) => {
    const [viewer, loading] = useViewer()
    const router = useRouter()
    const pathName = usePathname()

    useEffect(() => {
      console.log('loading viewer is ', loading)
      if (loading) {
        return // No need to perform further checks while loading
      }

      // Consolidated condition to handle redirects
      if (viewer?._id && (pathName === '/signin' || pathName === '/signup')) {
        router.replace('/')
      }
    }, [loading, viewer?._id, pathName])

    if (loading) {
      return (
        <>
          <Loader />
        </>
      )
    }

    return <WrappedComponent {...props} />
  }

  return AuthRedirect
}

export default withAuth
