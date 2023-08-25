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

  return (
    <div className={`${styles.signup} pb-[180px] md:h-[1072px] md:bg-cover md:bg-center`}>
      <Navbar itemsColor='white' />
      <button onClick={() => setStep(step + 1)}>step</button>
      <button onClick={() => setStep(1)}>reset</button>
      <button onClick={() => setIsSuccess(!isSuccess)}>success</button>
      {isSuccess ? (
        <div className='w-full justify-center'>
          <SignupSuccess setIsSuccess={setIsSuccess} />
        </div>
      ) : isOtp ? (
        <OTPForm closeOtp={handleOtpClose} type={'registration'} />
      ) : step === 1 ? (
        <SignupForm openOtp={handleOtpOpen} />
      ) : step === 2 ? (
        <AddShopDetailsForm />
      ) : null}
    </div>
  )
}
