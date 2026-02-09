//backend/src/ app.js
import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.route.js";
import todoRoutes from "./routes/todo.route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("server running and this is starting point");
})

app.use("/auth", authRoutes);
app.use("/todos", todoRoutes);

export default app;
