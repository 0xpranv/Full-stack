import { PrismaClient } from "@prisma/client";

export const client = new PrismaClient();

export async function connect() {
  try {
    const res = await client.$connect();
    console.log("db is connected ");
  } catch (e) {
    console.log("problem connecting with db");
    throw e;
  } finally {
    async () => {
      await client.$disconnect();
    };
  }
}
