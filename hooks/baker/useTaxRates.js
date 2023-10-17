import { useQuery } from '@apollo/client'

import taxRatesQuery from './taxRates.gql'

/**
 * Gets the bakers list based on search parameters
 *
 * @returns {Array} the bakers' list
 */
export default function useTaxRates(shopId) {
  const { data, loading, refetch } = useQuery(taxRatesQuery, {
    variables: {
      shopId,
    },
  })

  //   console.log('data is ', data)
  const taxRate = data?.taxRates?.edges[0]?.node?.rate

  //   console.log('taxRates in hook is ', taxRate)
  return [taxRate, loading, refetch]
}
