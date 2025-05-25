import { MedusaRequest, MedusaResponse } from "@medusajs/framework"


///Total de pedidos por cliente

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  try {
    const orderModuleService = req.scope.resolve("order");
    const customerModuleService = req.scope.resolve("customer");

    // Obtener todas las órdenes con customer_id definido
    const [orders] = await orderModuleService.listAndCountOrders({
      customer_id: { $ne: null }
    });

    // Agrupar por customer_id
    const orderCountByCustomerId: Record<string, number> = {};
    for (const order of orders) {
      const id = order.customer_id;
      if (!id) continue;
      orderCountByCustomerId[id] = (orderCountByCustomerId[id] || 0) + 1;
    }

    // Obtener detalles de los clientes
    const customerIds = Object.keys(orderCountByCustomerId);

    const [customers] = await customerModuleService.listAndCountCustomers({
      id: customerIds
    });

    // Armar respuesta con name y número de pedidos
    const result = customers.map((c: any) => ({
      customer: `${c.first_name} ${c.last_name}`,
      orders: orderCountByCustomerId[c.id] || 0
    }));

    return res.json(result);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Error interno", detail: err.message });
  }
};
