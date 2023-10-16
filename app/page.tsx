'use client'

import { withApollo } from 'lib/apollo/withApollo'

import useViewer from 'hooks/viewer/useViewer'
import { useEffect } from 'react'
import HomePage from '@/components/HomePage'

const Home = () => {
  const [account, loading, refetch] = useViewer()
  useEffect(() => {
    refetch()
  }, [])

  useEffect(() => {
    console.log('account', account)
  }, [account])

  return (
    <>
      <HomePage />
    </>
  )
}

export default withApollo()(Home)
