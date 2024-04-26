import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent, clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { createUser } from "@/lib/actions/user.action";

export async function POST(req: Request) {}
