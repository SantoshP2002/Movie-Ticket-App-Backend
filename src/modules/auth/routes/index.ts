import { Router } from "express";
import {
  MulterMiddleware,
  RequestMiddleware,
  ResponseMiddleware,
  ZodMiddleware,
} from "../../../middleware";
import { registerController } from "../controller/register";
import { loginZodSchema, registerZodSchema } from "../../../validation";
import { loginController } from "../controller";

export const router = Router();

router.post(
  "/register",
  MulterMiddleware.validateFiles({ type: "single", fieldName: "profilePic" }),
  RequestMiddleware.checkEmptyRequest({ body: true }),
  ZodMiddleware.validateZodSchema(registerZodSchema),
  ResponseMiddleware.catchAsync(registerController),
);

router.post(
  "/login",
  RequestMiddleware.checkEmptyRequest({ body: true }),
  ZodMiddleware.validateZodSchema(loginZodSchema),
  ResponseMiddleware.catchAsync(loginController),
);
