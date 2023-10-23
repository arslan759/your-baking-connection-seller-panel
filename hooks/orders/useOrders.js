import { useLazyQuery } from '@apollo/client'
import ordersQuery from './orders.gql'

export default function useOrders() {
  const [getOrdersData, { loading, data }] = useLazyQuery(ordersQuery)

  return [getOrdersData, loading, data]
}
