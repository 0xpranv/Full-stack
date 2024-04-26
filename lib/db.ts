import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function connect() {
  try {
    const res = await prisma.$connect();
    console.log("db is connected ");
    console.log(res);
    // ... you can now use Prisma Client
  } catch (e) {
    throw e;
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
}
