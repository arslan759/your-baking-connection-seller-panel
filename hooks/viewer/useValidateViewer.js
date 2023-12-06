import { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import useStores from 'hooks/useStores'
import viewerQuery from './validateViewer.gql'

/**
 * Gets current viewer's data
 *
 * @returns {Array} the viewer's data
 */
export default function useViewer() {
  // const { authStore } = useStores()
  // const { account, setAccount } = authStore
  const authToken =
    typeof window !== 'undefined' ? window.localStorage.getItem('accounts:accessToken') : ''

  const { loading, data, refetch } = useQuery(viewerQuery)

  const viewer = data?.viewer
  useEffect(() => {
    refetch()
  }, [authToken])

  // useEffect(() => {
  //   if (loading) {
  //     return
  //   }
  //   // setAccount(viewer)
  // }, [viewer])

  return [viewer, loading, refetch]
}
