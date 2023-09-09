import { useMutation } from '@apollo/client'
import updateProductVariantMutation from './updateProductVariant.gql'

/**
 * Update the variant for create product
 *
 * @returns {Array} the update variant function and loading state
 */
export default function useUpdateProductVariant() {
  const [updateProductVariantFunction, { data, loading }] = useMutation(
    updateProductVariantMutation,
  )
  return [updateProductVariantFunction, loading]
}
