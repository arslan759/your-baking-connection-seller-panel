import React from 'react'
import NavBar from '../NavBar'
import AddShopDetailsForm from '../AddShopDetailsForm'
import styles from './styles.module.css'
import withAuth from 'hocs/withAuth'
import { withApollo } from 'lib/apollo/withApollo'

const CreateShop = () => {
  return (
    <div className={`${styles.signup} pb-[180px] md:h-[1072px] md:bg-cover md:bg-center`}>
      <NavBar itemsColor='white' />
      {/* <button onClick={() => setStep(step + 1)}>step</button>
        <button onClick={() => setStep(1)}>reset</button>
        <button onClick={() => setIsSuccess(!isSuccess)}>success</button>
        <button onClick={() => setIsOtp(!isOtp)}>otp</button> */}

      <AddShopDetailsForm />
    </div>
  )
}

export default withApollo()(withAuth(CreateShop))
