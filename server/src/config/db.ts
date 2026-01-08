import { PrismaClient } from "../generated/prisma/client";

export const prisma = new PrismaClient({
  adapter: undefined,
});