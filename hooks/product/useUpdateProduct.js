import { useMutation } from '@apollo/client'
import updateProductMutation from './updateProduct.gql'

/**
 * update product for shop
 *
 * @returns {Array} the update product function and loading state
 */
export default function useUpdateProduct() {
  const [updateProductFunction, { data, loading }] = useMutation(updateProductMutation)
  return [updateProductFunction, loading]
}
