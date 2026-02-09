// controllers/auth.controller.js
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import { JWT_SECRET } from "../config/config.js";

export async function signup(req, res) {
  try {
    const { name, email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password required" });
    }

    // model function
    const existingUser = await User.findByEmail(email);
    if (existingUser) {
      return res.status(409).json({ error: "User already exists" });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    // model function
    await User.createUser({ name, email, passwordHash });

    res.status(201).json({ message: "Signup successful" });
  } catch (err) {
    res.status(500).json({ error: "Signup failed" });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    // model function
    const user = await User.findByEmail(email);
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email, name: user.name },
      JWT_SECRET,
      { expiresIn: "1h" },
    );

    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: "Login failed" });
  }
}
