import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function connect() {
  try {
    const res = await prisma.$connect();
    console.log("db is connected ");
  } catch (e) {
    console.log("problem connecting with db");
    throw e;
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
}
