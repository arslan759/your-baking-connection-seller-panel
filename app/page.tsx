'use client'

import { withApollo } from 'lib/apollo/withApollo'

import Link from 'next/link'
import useViewer from 'hooks/viewer/useViewer'
import { useEffect } from 'react'
import HomePage from '@/components/HomePage'
import withAuth from 'hocs/withAuth'

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

export default withApollo()(withAuth(Home))
