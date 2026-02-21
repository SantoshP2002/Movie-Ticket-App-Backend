const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";

export const allowedOrigins = [FRONTEND_URL];

export const MB = 1024 ** 2;
export const MAX_IMAGE_FILE_SIZE = 2 * MB;

export const ALLOWED_IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/jpg",
];
