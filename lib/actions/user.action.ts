"use server";

import { PrismaClient } from "@prisma/client";
import { connect } from "../db";

const prisma = new PrismaClient();

export async function createUser(user: any) {
  try {
    await connect();
    const newUser = await prisma.user.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (err) {
    console.log(err);
  }
}
