// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "../db";
import { hashController } from "../../controllers/hashingController";
import { JWTController } from "../../controllers/JWTController";

export default async function handler(req, res) {
  // Check if password or email is missing
  if (!req.body.password || !req.body.email)
    return res.json({ error: "Missing email or password" });

  // Check if email is a real email
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!emailRegex.test(req.body.email))
    return res.json({ error: "Invalid email" });

  // Check if Email is already in use
  const checkForUser = await prisma.user.findUnique({
    where: { email: req.body.email },
  });

  if (checkForUser) return res.json({ error: "Email already exists" });

  // Finally create user, and hash password
  const user = await prisma.User.create({
    data: {
      email: req.body.email,
      hash: hashController.hashPassword(req.body.password),
    },
  });

  const token = JWTController.createToken(user.id);
  res.setHeader("Set-Cookie", `token=${token}; HttpOnly; Max-Age=${60 * 60 * 24 * 7}`);
  
  return res.json({
    token: JWTController.createToken(user.id),
  });
}
