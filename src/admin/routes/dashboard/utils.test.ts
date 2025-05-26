import { SortByOrdersDesc, SortProductsDesc, FilterByRegionOrders10 } from "./utils"

describe("SortByOrdersDesc", () => {
  it("Correctly sorts by number of orders ", () => {
    const input = [
      { customer: "A", orders: 5 },
      { customer: "B", orders: 10 },
      { customer: "C", orders: 8 },
    ]
    const result = SortByOrdersDesc(input)
    expect(result).toEqual([
      { customer: "B", orders: 10 },
      { customer: "C", orders: 8 },
      { customer: "A", orders: 5 },
    ])
  })
})

describe("SortByProductsDesc", () => {
  it("Correctly sorts by number of products", () => {
    const input = [
      { collection_name: "X", product_count: 2 },
      { collection_name: "Y", product_count: 10 },
      { collection_name: "Z", product_count: 5 },
    ]
    const result = SortProductsDesc(input)
    expect(result).toEqual([
      { collection_name: "Y", product_count: 10 },
      { collection_name: "Z", product_count: 5 },
      { collection_name: "X", product_count: 2 },
    ])
  })
})

describe("FilterByRegionOrders10", () => {
  it("Filters out regions with less than 10 orders", () => {
    const input = [
      { region_name: "North", order_count: 15 },
      { region_name: "South", order_count: 5 },
      { region_name: "East", order_count: 20 },
      { region_name: "West", order_count: 8 },
    ]
    const result = FilterByRegionOrders10(input)
    expect(result).toEqual([
      { region_name: "South", order_count: 5 },
      { region_name: "West", order_count: 8 },
    ])
  })
})