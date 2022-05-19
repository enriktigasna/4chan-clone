// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "../db";
import {
  hashPassword,
  validatePassword,
} from "../../controllers/hashingController";

export default async function handler(req, res) {
  res.json({ result: validatePassword(req.body.password, req.body.hash) });
}
