import { useMutation } from '@apollo/client'

import updateAccountMutation from './updateAccount.gql'

/**
 * Update user profile info
 *
 * @returns {Function} the user profile settings
 */
export default function useUpdateAccount() {
  const [updateUserFunction, { _, loading }] = useMutation(updateAccountMutation)
  return [updateUserFunction, loading]
}
