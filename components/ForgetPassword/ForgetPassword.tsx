import { useState } from 'react'
import Navbar from '../NavBar/NavBar'
import styles from './styles.module.css'
import ForgotPasswordForm from '../ForgotPasswordForm/ForgotPasswordForm'
import OTPForm from '../OTPForm/OTPForm'

export default function ForgetPassword() {
  const [isOtp, setIsOtp] = useState(false)

  const [email, setEmail] = useState<string>('')

  const handleOtpOpen = () => {
    setIsOtp(true)
  }

  const handleChangeEmail = (email: string) => {
    setEmail(email)
  }

  const handleOtpClose = () => {
    setIsOtp(false)
    console.log('close')
  }

  return (
    <div className={`${styles.forgetpassword} pb-[180px] md:h-[1072px] md:bg-cover md:bg-center`}>
      <Navbar itemsColor='white' />
      {isOtp ? (
        <OTPForm closeOtp={handleOtpClose} type={'forgotPassword'} email={email} />
      ) : (
        <ForgotPasswordForm openOtp={handleOtpOpen} setEmail={handleChangeEmail} email={email} />
      )}
    </div>
  )
}
