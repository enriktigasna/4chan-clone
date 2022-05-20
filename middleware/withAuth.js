import { prisma } from "../pages/db";
import { JWTController } from "../controllers/JWTController";

export const withAuth = (handler) => async (req, res) => {
  let token;
  if (req.cookies && req.cookies.token) {
    token = req.cookies.token;
  }

  if (!token) {
    return res.status(403).json({ error: "No credentials sent!" });
  }

  let decoded;
  try {
    decoded = JWTController.decodeToken(token);
  } catch (e) {
    return res.status(403).json({ error: "Invalid credentials!" });
  }

  const user = await prisma.User.findUnique({
    where: {
      id: decoded.UUID,
    },
  });
  if (!user) {
    return res.status(403).json({ error: "User not found" });
  }
  req.user = user;

  return handler(req, res);
};
