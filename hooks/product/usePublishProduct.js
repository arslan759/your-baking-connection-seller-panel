import { useMutation } from '@apollo/client'
import publishProductMutation from './publishProduct.gql'

/**
 * Publish the product to catalog
 *
 * @returns {Array} the publish product function and loading state
 */
export default function usePublishProduct() {
  const [publishProductFunction, { data, loading }] = useMutation(publishProductMutation)
  return [publishProductFunction, loading]
}
