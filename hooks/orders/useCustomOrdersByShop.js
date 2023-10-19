import { useQuery } from '@apollo/client'

import customOrdersByShopQuery from './customOrdersByShop.gql'

/**
 * Gets the custom Orders list based on search parameters
 *
 * @returns {Array} the custom Order's list
 */
export default function useCustomOrdersByShop(input) {
  const { data, loading, refetch } = useQuery(customOrdersByShopQuery, {
    variables: input,
  })

  console.log('custom orders are ', data)

  const customOrders = data?.customOrdersByShop?.nodes

  const totalCount = data?.customOrdersByShop?.totalCount

  return [customOrders, loading, totalCount, refetch]
}
