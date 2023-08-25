import { useMutation } from '@apollo/client'
import createUserWithOtpMutation from './createUserWithOtp.gql'

/**
 * Custom hook for creating a user with OTP (One-Time Password).
 *
 * @returns {Array} An array containing the `createUserWithOtp` function and a `loading` indicator.
 */

export default function useCreateUserWithOtp() {
  const [createUserWithOtp, { loading }] = useMutation(createUserWithOtpMutation)

  return [createUserWithOtp, loading]
}
