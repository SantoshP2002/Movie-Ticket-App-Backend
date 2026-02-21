import "dotenv/config";
import express, { Request, Response } from "express";
import { connectDB } from "./configs/database";
import { router } from "./Routes";
import {
  CorsMiddleware,
  DatabaseMiddleware,
  ResponseMiddleware,
} from "./middleware";

const PORT = process.env.PORT || 8080;

const app = express();

// ✅ CORS FIRST (before routes & body)
app.use(CorsMiddleware.checkOrigin);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req: Request, res: Response) => {
  res.send("Movie Ticket Backend Running 🎬");
});

// Custom Middlewares
app.use(ResponseMiddleware.success);
app.use(DatabaseMiddleware.checkConnection);

app.use("/api", router);

// Error Handling
app.use(ResponseMiddleware.notFound);
app.use(ResponseMiddleware.error);

app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log(`Server running on port ${PORT} 🚀`);
  } catch (error) {
    console.error("Server startup failed:", error);
    process.exit(1);
  }
});
