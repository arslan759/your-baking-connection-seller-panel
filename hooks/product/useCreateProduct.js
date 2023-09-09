import { useMutation } from '@apollo/client'
import createProductMutation from './createProduct.gql'

/**
 * Create product for shop
 *
 * @returns {Array} the create product function and loading state
 */
export default function useCreateProduct() {
  const [createProductFunction, { data, loading }] = useMutation(createProductMutation)
  return [createProductFunction, loading]
}
