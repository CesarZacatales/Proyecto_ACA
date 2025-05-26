export type OrdersByCustomer = {
    customer: string
    orders: number
}

export type CollectionProduct = {
    collection_name: string
    product_count: number
}

export type RegionOrder = {
    region_name: string
    order_count: number
}

export function SortByOrdersDesc(data: OrdersByCustomer[]) {
    return [...data].sort((a, b) => b.orders - a.orders)
}

export function SortProductsDesc(data: CollectionProduct[]) {
    return [...data].sort((a, b) => b.product_count - a.product_count)
}

export function FilterByRegionOrders10(data: RegionOrder[]) {
    return [...data].filter((r) => r.order_count < 10)
}