import Navbar from '../NavBar/NavBar'
import SignupForm from '../SignupForm'
import styles from './styles.module.css'

import { useState } from 'react'

import AddShopDetailsForm from '../AddShopDetailsForm/AddShopDetailsForm'
import OTPForm from '../OTPForm/OTPForm'
import SignupSuccess from '../SignupSuccess/SignupSuccess'
import withAuth from 'hocs/withAuth'
import { withApollo } from 'lib/apollo/withApollo'

const Signup = () => {
  const [isOtp, setIsOtp] = useState(false)
  const [step, setStep] = useState(1)
  const [isSuccess, setIsSuccess] = useState(false)

  const [tokens, setTokens] = useState({
    accessToken: '',
    refreshToken: '',
  })
  const handleChangeTokens = (accessToken: string, refreshToken: string) => {
    setTokens({ accessToken, refreshToken })
  }
  const handleChangeStep = (value: number) => {
    setIsOtp(false)
    console.log('step value is ', value)
    setStep(value)
  }

  const handleOtpOpen = () => {
    setIsOtp(true)
  }

  const handleOtpClose = () => {
    setIsOtp(false)
    console.log('close')
  }

  const handleSuccessOpen = () => {
    setIsSuccess(true)
  }

  // page displays otp form
  if (isOtp) {
    return (
      <div className={`${styles.signup} pb-[180px] md:h-[1072px] md:bg-cover md:bg-center`}>
        <Navbar itemsColor='white' />
        {/* <button onClick={() => setStep(step + 1)}>step</button>
        <button onClick={() => setStep(1)}>reset</button>
        <button onClick={() => setIsSuccess(!isSuccess)}>success</button>
        <button onClick={() => setIsOtp(!isOtp)}>otp</button> */}

        <div className='w-full justify-center mt-[50px] md:mt-[130px]'>
          <OTPForm
            closeOtp={handleOtpClose}
            type={'registration'}
            tokens={tokens}
            setStep={handleChangeStep}
          />
        </div>
      </div>
    )
  }

  // page displays signup success
  if (isSuccess) {
    return (
      <div className={`${styles.signup} pb-[180px] md:h-[1072px] md:bg-cover md:bg-center`}>
        <Navbar itemsColor='white' />
        {/* <button onClick={() => setStep(step + 1)}>step</button>
        <button onClick={() => setStep(1)}>reset</button>
        <button onClick={() => setIsSuccess(!isSuccess)}>success</button>
        <button onClick={() => setIsOtp(!isOtp)}>otp</button> */}

        <div className='w-full justify-center'>
          <SignupSuccess setIsSuccess={setIsSuccess} />
        </div>
      </div>
    )
  }

  // page displays signup form
  if (step === 1) {
    return (
      <div className={`${styles.signup} pb-[180px] md:h-[1072px] md:bg-cover md:bg-center`}>
        <Navbar itemsColor='white' />
        {/* <button onClick={() => setStep(step + 1)}>step</button>
        <button onClick={() => setStep(1)}>reset</button>
        <button onClick={() => setIsSuccess(!isSuccess)}>success</button>
        <button onClick={() => setIsOtp(!isOtp)}>otp</button> */}

        <SignupForm openOtp={handleOtpOpen} setTokens={handleChangeTokens} />
      </div>
    )
  } else if (step === 2) {
    // page displays add shop details form
    return (
      <div className={`${styles.signup} pb-[180px] md:h-[1072px] md:bg-cover md:bg-center`}>
        <Navbar itemsColor='white' />
        {/* <button onClick={() => setStep(step + 1)}>step</button>
        <button onClick={() => setStep(1)}>reset</button>
        <button onClick={() => setIsSuccess(!isSuccess)}>success</button>
        <button onClick={() => setIsOtp(!isOtp)}>otp</button> */}

        <AddShopDetailsForm openSuccess={handleSuccessOpen} />
      </div>
    )
  }
  // page displays signup form
  else
    return (
      <div className={`${styles.signup} pb-[180px] md:h-[1072px] md:bg-cover md:bg-center`}>
        <Navbar itemsColor='white' />
        {/* <button onClick={() => setStep(step + 1)}>step</button>
        <button onClick={() => setStep(1)}>reset</button>
        <button onClick={() => setIsSuccess(!isSuccess)}>success</button>
        <button onClick={() => setIsOtp(!isOtp)}>otp</button> */}

        <SignupForm openOtp={handleOtpOpen} />
      </div>
    )
}

export default withApollo()(withAuth(Signup))
