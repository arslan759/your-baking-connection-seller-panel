import { useMutation } from '@apollo/client'
import enablePaymentMethodForShopMutation from './enablePaymentMethodForShop.gql'

/**
 * Create tax rate for a shop
 *
 * @returns {Array} the create tax rate function
 */
export default function useEnablePaymentMethodForShop() {
  const [enablePaymentMethodForShopFunction, { data, loading }] = useMutation(
    enablePaymentMethodForShopMutation,
  )
  return [enablePaymentMethodForShopFunction, loading]
}
