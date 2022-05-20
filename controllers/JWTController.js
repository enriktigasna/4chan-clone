const jwt = require("jsonwebtoken")
require("dotenv").config()
export const JWTController = {
    createToken: (UUID) => jwt.sign({"UUID": UUID}, process.env.JWT_SECRET),
    decodeToken: (token) => jwt.verify(token, process.env.JWT_SECRET)
}