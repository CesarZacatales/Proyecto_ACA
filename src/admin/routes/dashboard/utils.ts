export type OrdersByCustomer = {
  customer: string
  orders: number
}

export function SortByOrdersDesc(data: OrdersByCustomer[]) {
  return [...data].sort((a, b) => b.orders - a.orders)
}

export type CollectionProduct = {
  collection_name: string
  product_count: number
}

export function SortProductsDesc(data: CollectionProduct[]) {
  return [...data].sort((a, b) => b.product_count - a.product_count)
}