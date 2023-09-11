import { useMutation } from '@apollo/client'
import createShopMutation from './createShop.gql'

/**
 * Create shop
 *
 * @returns {Array} the create shop function
 */
export default function useCreateShop() {
  const [createShopFunction, { data, loading }] = useMutation(createShopMutation)
  return [createShopFunction, loading]
}
