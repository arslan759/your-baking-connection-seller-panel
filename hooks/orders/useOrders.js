import { useLazyQuery } from '@apollo/client'
import ordersQuery from './orders.gql'

export default function useOrders(input) {
  const [getOrdersData, { loading, data }] = useLazyQuery(ordersQuery, {
    variables: {
      ...input,
    },
  })

  console.log('data', data)

  const totalOrders = data?.orders?.totalCount

  return [getOrdersData, loading, data, totalOrders]
}
