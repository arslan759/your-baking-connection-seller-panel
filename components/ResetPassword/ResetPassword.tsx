import React, { FC } from 'react'
import ResetPasswordForm from '../ResetPasswordForm'
import Navbar from '../NavBar/NavBar'
import styles from './styles.module.css'

interface ForgetPasswordProps {
  otp: string // Change `any` to the appropriate type for `otp`
}

const ForgetPassword: React.FC<ForgetPasswordProps> = ({ otp }) => {
  return (
    <div className={`${styles.forgetpassword} pb-[180px] md:h-[1072px] md:bg-cover md:bg-center`}>
      <Navbar itemsColor='white' />
      <ResetPasswordForm otp={otp} />
    </div>
  )
}

export default ForgetPassword
