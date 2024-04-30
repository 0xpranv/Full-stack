"use server";

import { PrismaClient } from "@prisma/client";
import { connect } from "../db";

const prisma = new PrismaClient();

export async function createUser(user: any) {
  try {
    await connect();
    const newUser = await prisma.user.create({ data: user });
    return JSON.parse(JSON.stringify(newUser));
  } catch (err) {
    console.log(err);
  }
}

export async function getAllUsers() {
  try {
    await connect();
    const newUsers = await prisma.user.findMany({});
    console.log(newUsers);
    return newUsers;
  } catch (err) {
    console.log(err);
  }
}
