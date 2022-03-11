import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export interface Context {
  prisma: PrismaClient
}

export const prismaContext: Context = {
  prisma: prisma,
}
