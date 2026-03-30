
import { prisma } from "../utils/prisma";

export async function dashboardService(type: string, startDate: Date, endDate: Date) {
  const data = await prisma.transaction.findMany({
    where: {
      createdAt: {
        gte: startDate,
        lte: endDate
      }
    }
  });

  if (type === "pie") {
    const grouped: any = {};
    data.forEach(item => {
      grouped[item.category] = (grouped[item.category] || 0) + item.amount;
    });

    return {
      labels: Object.keys(grouped),
      values: Object.values(grouped)
    };
  }

  if (type === "line") {
    const grouped: any = {};
    data.forEach(item => {
      const date = item.createdAt.toISOString().split("T")[0];
      grouped[date] = (grouped[date] || 0) + item.amount;
    });

    return {
      labels: Object.keys(grouped),
      values: Object.values(grouped)
    };
  }

  throw new Error("Invalid type");
}
