// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "../db";
import {
  hashPassword,
  validatePassword,
} from "../../controllers/hashingController";

export default async function handler(req, res) {
  if (!req.body.password || !req.body.email) {
    res.json({
      error: "Missing email or password",
    });
  }
  prisma.User.create({
    data: {
        email: req.body.email,
        hash: hashPassword(req.body.password),
        Posts: {}
    }
  })
  res.json({ result: `Successfully created account for ${req.body.email}` });
}
