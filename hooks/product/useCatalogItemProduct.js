import { useEffect } from 'react'
import { useQuery } from '@apollo/client'

import catalogItemProductQuery from './catalogItemProduct.gql'

/**
 * Gets the product catalog for the shops and filters specified
 *
 * @returns {Array} the product catalog, loading state, refetch function and total count
 */
export default function useCatalogItemProduct(input) {
  const { loading, data, refetch } = useQuery(catalogItemProductQuery, {
    variables: input,
  })

  const catalogItemProduct = data?.catalogItemProduct?.product

  console.log('catalogItemProduct', catalogItemProduct)

  return [catalogItemProduct, loading, refetch]
}
