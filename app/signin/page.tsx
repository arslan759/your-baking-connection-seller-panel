'use client'

import Signin from '@/components/Signin'
// import { useSession } from 'next-auth/react'
// import { useRouter } from 'next/navigation'
// import { useEffect } from 'react'

export default function SignIn() {
  // const { data: session, status } = useSession()

  // const router = useRouter()

  // useEffect(() => {
  //   if (status === 'authenticated') {
  //     router.push('/')
  //   }
  // }, [status])

  return (
    <>
      <div className=''>
        <div className='w-full'>
          <Signin />
        </div>
      </div>
    </>
  )
}
