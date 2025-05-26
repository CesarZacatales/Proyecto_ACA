import { SortByOrdersDesc, SortProductsDesc } from "./utils"

describe("OrderByOrdersDesc", () => {
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

describe("ordenarPorProductosDesc", () => {
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
