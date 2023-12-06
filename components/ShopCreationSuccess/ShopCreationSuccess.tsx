import React from 'react'
import NavBar from '../NavBar'
import SignupSuccess from '../SignupSuccess/SignupSuccess'
import styles from './styles.module.css'
import { withApollo } from 'lib/apollo/withApollo'

const ShopCreationSuccess = () => {
  return (
    <div className={`${styles.signup} pb-[180px] md:h-[1072px] md:bg-cover md:bg-center`}>
      <NavBar itemsColor='white' />{' '}
      {/* <button onClick={() => setStep(step + 1)}>step</button>
  //       <button onClick={() => setStep(1)}>reset</button>
  //       <button onClick={() => setIsSuccess(!isSuccess)}>success</button>
  //       <button onClick={() => setIsOtp(!isOtp)}>otp</button> */}{' '}
      <div className='w-full justify-center'>
        <SignupSuccess />{' '}
      </div>{' '}
    </div>
  )
}

export default withApollo()(ShopCreationSuccess)
