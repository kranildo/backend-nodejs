import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.transaction.createMany({
    data: [
      { amount: 100, category: "Food" },
      { amount: 200, category: "Transport" },
      { amount: 50, category: "Food" },
      { amount: 300, category: "Other" }
    ]
  });
}

main().finally(() => prisma.$disconnect());