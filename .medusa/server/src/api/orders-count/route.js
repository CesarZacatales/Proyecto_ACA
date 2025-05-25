"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const GET = async (req, res) => {
    try {
        const orderService = req.scope.resolve("order");
        // listAndCountOrders devuelve [orders, count]
        const [orders, count] = await orderService.listAndCountOrders();
        res.json({
            total_orders: count,
            sample_order: orders[0] || null,
        });
    }
    catch (error) {
        res.status(500).json({
            error: "Error interno",
            detail: error.message,
        });
    }
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYXBpL29yZGVycy1jb3VudC9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFTyxNQUFNLEdBQUcsR0FBRyxLQUFLLEVBQUUsR0FBa0IsRUFBRSxHQUFtQixFQUFFLEVBQUU7SUFDbkUsSUFBSSxDQUFDO1FBQ0gsTUFBTSxZQUFZLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7UUFFL0MsOENBQThDO1FBQzlDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEdBQUcsTUFBTSxZQUFZLENBQUMsa0JBQWtCLEVBQUUsQ0FBQTtRQUUvRCxHQUFHLENBQUMsSUFBSSxDQUFDO1lBQ1AsWUFBWSxFQUFFLEtBQUs7WUFDbkIsWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJO1NBQ2hDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFBQyxPQUFPLEtBQUssRUFBRSxDQUFDO1FBQ2YsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDbkIsS0FBSyxFQUFFLGVBQWU7WUFDdEIsTUFBTSxFQUFHLEtBQWUsQ0FBQyxPQUFPO1NBQ2pDLENBQUMsQ0FBQTtJQUNKLENBQUM7QUFDSCxDQUFDLENBQUE7QUFqQlksUUFBQSxHQUFHLE9BaUJmIn0=