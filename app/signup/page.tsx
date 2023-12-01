'use client'

import Signup from '@/components/Signup'
// import { useSession } from 'next-auth/react'
// import { useRouter } from 'next/navigation'
// import { useEffect } from 'react'

export default function SignUp() {
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
          <Signup />
        </div>
      </div>
    </>
  )
}
