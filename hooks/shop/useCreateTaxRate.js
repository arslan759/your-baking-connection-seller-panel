import { useMutation } from '@apollo/client'
import createTaxRateMutation from './createTaxRate.gql'

/**
 * Create tax rate for a shop
 *
 * @returns {Array} the create tax rate function
 */
export default function useCreateTaxRate() {
  const [createTaxRateFunction, { data, loading }] = useMutation(createTaxRateMutation)
  return [createTaxRateFunction, loading]
}
