// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "../db";
import { JWTController } from "../../controllers/JWTController";
import { hashController } from "../../controllers/hashingController";

export default async function handler(req, res) {
  // Check if password or email is missing
  if (!req.body.password || !req.body.email)
    return res.json({ error: "Missing email or password" });
  
  const user = await prisma.user.findUnique({
    where: { email: req.body.email },
  })
  if (!user) return res.json({ error: "Email not found" });

  const isValid = hashController.validatePassword(req.body.password, user.hash);
  if (!isValid) return res.json({ error: "Invalid password" });

  const token = JWTController.createToken(user.id);
  res.setHeader("Set-Cookie", `token=${token}; HttpOnly; Max-Age=${60 * 60 * 24 * 7}`);

  return res.json({
    "token": token,
  });
}
