import cors from "cors";
import { AppError } from "../../classes/AppError";
import { FRONTEND_DEVELOPMENT_URL, FRONTEND_PRODUCTION_URL } from "../../env";

const allowedOrigins = [
  FRONTEND_PRODUCTION_URL,
  FRONTEND_DEVELOPMENT_URL,
].filter(Boolean);

export const checkOrigin = cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);

    const normalizedOrigin = origin.replace(/\/$/, "");

    const isAllowed = allowedOrigins.some(
      (allowed) => allowed?.replace(/\/$/, "") === normalizedOrigin,
    );

    if (isAllowed) {
      callback(null, true);
    } else {
      callback(new AppError("Not allowed by CORS", 403));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
});
