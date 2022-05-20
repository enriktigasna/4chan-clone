const jwt = require("jsonwebtoken")
require("dotenv").config()

export const getUser = async (token) => {
  const decoded = await jwt.verify(token, process.env.JWT_SECRET);
  const user = await prisma.user.findUnique({
    where: {
      id: decoded.UUID,
    },
  });
  return user;
};