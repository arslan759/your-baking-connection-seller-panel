import React from 'react'
import NavBar from '../NavBar/NavBar'
import LedgerCard from '../LedgerCard/LedgerCard'
import { withApollo } from 'lib/apollo/withApollo'
import withAuth from 'hocs/withAuth'

const Ledger = () => {
  return (
    <div>
      <NavBar />

      <div className='mt-[24px] md:mt-[100px] flex justify-center'>
        <LedgerCard />
      </div>
    </div>
  )
}

export default withApollo()(withAuth(Ledger))
