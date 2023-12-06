import { useMutation } from '@apollo/client'
import createConnectedAccount from './createConnectedAccount.gql'

export default function useCreateConnectedAccount() {
  const [createConnectAccountFunction, { data, loading }] = useMutation(createConnectedAccount, {
    onCompleted() {
      console.log('connect account Created')
    },
  })
  return [createConnectAccountFunction, loading]
}
