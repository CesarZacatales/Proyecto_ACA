import { MedusaRequest, MedusaResponse } from "@medusajs/framework";

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  try {
    const productService = req.scope.resolve("product"); // aquí cambio

    const [products, count] = await productService.listAndCountProducts({}, {
      relations: [
        "variants",
        "collection",
        "type",
        "tags",
        "categories",
        "options",
      ],
      take: 100,
    });

    return res.json({
      total: count,
      products,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno", detail: error.message });
  }
};
