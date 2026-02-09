//server.js
import app from "./app.js";
import { PORT } from "./config/config.js";
import connectDB from "./config/db.js";

import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]); // Google's Public DNS

connectDB();

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
