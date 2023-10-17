import { useMutation } from '@apollo/client'
import updateCustomOrderMutation from './updateCustomOrder.gql'

export default function useupdateCustomOrder() {
  const [customOrderFunction, { data, loading }] = useMutation(updateCustomOrderMutation, {
    onCompleted() {
      console.log('Custom Order status successfully updated')
    },
  })
  return [customOrderFunction, loading]
}
