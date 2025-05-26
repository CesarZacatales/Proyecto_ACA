import { MedusaRequest, MedusaResponse } from "@medusajs/framework";

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  try {
    const productService = req.scope.resolve("product");

    const products = await productService.listProducts(
      {},
      {
        relations: ["collection"],
        take: 1000, // Ajusta si tienes más productos
      }
    );

    // Agrupar en memoria
    const grouped = products.reduce((acc, product) => {
      const name = product.collection?.title || "Sin colección";
      acc[name] = (acc[name] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    // Convertir a array
    const result = Object.entries(grouped).map(([collection_name, product_count]) => ({
      collection_name,
      product_count,
    }));

    return res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno", detail: error.message });
  }
};
