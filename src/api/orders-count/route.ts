import { MedusaRequest, MedusaResponse } from "@medusajs/framework"

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  try {
    const orderService = req.scope.resolve("order")

    // listAndCountOrders devuelve [orders, count]
    const [orders, count] = await orderService.listAndCountOrders()

    res.json({
      total_orders: count,
      sample_order: orders[0] || null,
    })
  } catch (error) {
    res.status(500).json({
      error: "Error interno",
      detail: (error as Error).message,
    })
  }
}
