//backend/middleware/authMiddleware.js
import { JWT_SECRET } from "../config/config.js";
import jwt from "jsonwebtoken";
export function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "No token" });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Token missing" });
  }


  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    console.log(decoded);
    next();
  } catch(err) {
    console.log(err);
    res.status(401).json({ error: "Invalid token last " });
  }
}
