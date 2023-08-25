import Navbar from '../NavBar/NavBar'
import SignupForm from '../SignupForm'
import styles from './styles.module.css'

import { useState } from 'react'

import AddShopDetailsForm from '../AddShopDetailsForm/AddShopDetailsForm'
import OTPForm from '../OTPForm/OTPForm'
import SignupSuccess from '../SignupSuccess/SignupSuccess'

export default function ForgetPassword() {
  const [isOtp, setIsOtp] = useState(false)
  const [step, setStep] = useState(1)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleOtpOpen = () => {
    setIsOtp(true)
  }

  const handleOtpClose = () => {
    setIsOtp(false)
    console.log('close')
  }

  // page displays otp form
  if (isOtp) {
    return (
      <div className={`${styles.signup} pb-[180px] md:h-[1072px] md:bg-cover md:bg-center`}>
        <Navbar itemsColor='white' />
        <button onClick={() => setStep(step + 1)}>step</button>
        <button onClick={() => setStep(1)}>reset</button>
        <button onClick={() => setIsSuccess(!isSuccess)}>success</button>
        <button onClick={() => setIsOtp(!isOtp)}>otp</button>

        <OTPForm closeOtp={handleOtpClose} type={'registration'} />
      </div>
    )
  }

  // page displays signup success
  if (isSuccess) {
    return (
      <div className={`${styles.signup} pb-[180px] md:h-[1072px] md:bg-cover md:bg-center`}>
        <Navbar itemsColor='white' />
        <button onClick={() => setStep(step + 1)}>step</button>
        <button onClick={() => setStep(1)}>reset</button>
        <button onClick={() => setIsSuccess(!isSuccess)}>success</button>
        <button onClick={() => setIsOtp(!isOtp)}>otp</button>

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
        <button onClick={() => setStep(step + 1)}>step</button>
        <button onClick={() => setStep(1)}>reset</button>
        <button onClick={() => setIsSuccess(!isSuccess)}>success</button>
        <button onClick={() => setIsOtp(!isOtp)}>otp</button>

        <SignupForm openOtp={handleOtpOpen} />
      </div>
    )
  } else if (step === 2) {
    // page displays add shop details form
    return (
      <div className={`${styles.signup} pb-[180px] md:h-[1072px] md:bg-cover md:bg-center`}>
        <Navbar itemsColor='white' />
        <button onClick={() => setStep(step + 1)}>step</button>
        <button onClick={() => setStep(1)}>reset</button>
        <button onClick={() => setIsSuccess(!isSuccess)}>success</button>
        <button onClick={() => setIsOtp(!isOtp)}>otp</button>

        <AddShopDetailsForm />
      </div>
    )
  }
  // page displays signup form
  else
    return (
      <div className={`${styles.signup} pb-[180px] md:h-[1072px] md:bg-cover md:bg-center`}>
        <Navbar itemsColor='white' />
        <button onClick={() => setStep(step + 1)}>step</button>
        <button onClick={() => setStep(1)}>reset</button>
        <button onClick={() => setIsSuccess(!isSuccess)}>success</button>
        <button onClick={() => setIsOtp(!isOtp)}>otp</button>

        <SignupForm openOtp={handleOtpOpen} />
      </div>
    )
}
