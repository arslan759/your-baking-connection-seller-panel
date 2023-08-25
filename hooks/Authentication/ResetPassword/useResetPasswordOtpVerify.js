import { useMutation } from '@apollo/client'
import resetPasswordMutation from './resetPasswordOtpVerify.gql'

/**
 * Gets current viewer's data
 *
 * @returns {Array} the viewer's data
 */
export default function useForgotPasswordUser() {
  const [resetPasswordFunction, { data, loading }] = useMutation(resetPasswordMutation, {
    onCompleted() {
      console.log('Forgot Password successful check your mail for otp')
    },
  })
  return [resetPasswordFunction, loading]
}
