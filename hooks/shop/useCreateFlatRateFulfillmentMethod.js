import { useMutation } from '@apollo/client'
import createFlatRateFulfillmentMethod from './createFlatRateFulfillmentMethod.gql'

export default function useCreateFlatRateFulfillmentMethod() {
  const [customOrderFunction, { data, loading }] = useMutation(createFlatRateFulfillmentMethod, {
    onCompleted() {
      console.log('Flat Rate Fulfillment Method Created')
    },
  })
  return [customOrderFunction, loading]
}
