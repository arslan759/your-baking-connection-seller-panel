import { useMutation } from '@apollo/client'
import updateSimpleInventory from './updateSimpleInventory.gql'

/**
 * This hook is being used for updating the quantity specified for a product listing
 *
 * @returns {Array} the update simple inventory function and loading state
 */
export default function useUpdateSimpleInventory() {
  const [updateSimpleInventoryFunction, { data, loading }] = useMutation(updateSimpleInventory)
  return [updateSimpleInventoryFunction, loading]
}
