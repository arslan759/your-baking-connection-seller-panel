'use client'
import { useRouter } from 'next/navigation'
import ResetPassword from '@/components/ResetPassword'

export default function ResetPasswordPage({ params }: { params: { otp: string } }) {
  const { otp } = params

  console.log('params are ', otp)

  return (
    <>
      <div className=''>
        <div className='w-full'>
          <ResetPassword otp={otp} />
        </div>
      </div>
    </>
  )
}
