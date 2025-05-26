import { MedusaRequest, MedusaResponse } from "@medusajs/framework";

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  try {
    const regionService = req.scope.resolve("region");
    const orderService = req.scope.resolve("order");

    const [regions] = await regionService.listAndCountRegions({});
    const [orders] = await orderService.listAndCountOrders({}, { take: 1000 });

    const regionMap = new Map();
    regions.forEach(r => regionMap.set(r.id, r.name));

    const regionCount: Record<string, number> = {};

    for (const order of orders) {
      const regionName = regionMap.get(order.region_id) || "Sin región";
      regionCount[regionName] = (regionCount[regionName] || 0) + 1;
    }

    const result = Object.entries(regionCount).map(([region_name, order_count]) => ({
      region_name,
      order_count,
    }));

    res.json(result);
  } catch (error) {
    console.error("Error al obtener órdenes por región:", error);
    res.status(500).json({ error: "Error interno", detail: error.message });
  }
};
