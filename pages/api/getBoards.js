// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "../db"

export default async function handler(req, res) {
  const boards = await prisma.Board.findMany()
  res.status(200).json(boards)
}
