// const FRONTEND_PRODUCTION_URL = process.env.FRONTEND_PRODUCTION_URL;
// const FRONTEND_DEVELOPMENT_URL = process.env.FRONTEND_DEVELOPMENT_URL;

// import { FRONTEND_DEVELOPMENT_URL, FRONTEND_PRODUCTION_URL } from "../env";

// export const allowedOrigins = [
//   FRONTEND_PRODUCTION_URL,
//   FRONTEND_DEVELOPMENT_URL,
// ];

// export const allowedOrigins = [
//   FRONTEND_PRODUCTION_URL,
//   FRONTEND_DEVELOPMENT_URL,
// ].filter(Boolean);

export const MB = 1024 ** 2;
export const MAX_IMAGE_FILE_SIZE = 2 * MB;

export const ALLOWED_IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/jpg",
];
