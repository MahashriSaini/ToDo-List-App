// controllers/auth.controller.js
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { readUserData, writeUserData } from "../utils/fileHandler.js";
import { JWT_SECRET } from "../config/config.js";

export async function signup(req, res) {
  const users = readUserData();
  const { name, email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password required" });
  }

  if (users.find(u => u.email === email)) {
    return res.status(409).json({ error: "User already exists" });
  }

  const passwordHash = await bcrypt.hash(password, 10);

  users.unshift({ name, email, passwordHash });
  writeUserData(users);

  res.status(201).json({ message: "Signup successful" });
}

export async function login(req, res) {
  const { email, password } = req.body;
  const users = readUserData();

  const user = users.find(u => u.email === email);
  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const isMatch = await bcrypt.compare(password, user.passwordHash);
  if (!isMatch) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const token = jwt.sign(
    { email: user.email, name: user.name },
    JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({ token });
}
