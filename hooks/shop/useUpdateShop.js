import { useMutation } from '@apollo/client'
import updateShopMutation from './updateShop.gql'

/**
 * Create shop
 *
 * @returns {Array} the update shop function
 */
export default function useUpdateShop() {
  const [updateShopFunction, { data, loading }] = useMutation(updateShopMutation)
  return [updateShopFunction, loading]
}
