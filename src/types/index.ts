import type multer from "multer";
import { UserModule } from "../modules";
import { Types } from "mongoose";

// Single Image Uploader Props
export interface SingleFileUploaderProps {
  file: Express.Multer.File;
  folder?: string;
}

// Multer Middleware Types

export type MulterType = "single" | "array" | "any" | "fields" | "none";

export type FieldsConfigType = {
  name: string;
  maxCount: number;
};

export type CustomLimitsType = {
  imageSize?: number;
  videoSize?: number;
  otherSize?: number;
};

export type CustomFileType = {
  imageTypes?: string[];
  videoTypes?: string[];
  otherTypes?: string[];
};

export interface FileValidatorOptionsProps {
  type: MulterType;
  fieldName?: string;
  maxCount?: number;
  fieldsConfig?: FieldsConfigType[];
  limits?: multer.Options["limits"];
  customLimits?: CustomLimitsType;
  customFileTypes?: CustomFileType;
}

// Custom Error Utils Types
export interface CustomFileErrorProps {
  files: Express.Multer.File[];
  customLimits?: CustomLimitsType;
  customFileTypes?: CustomFileType;
}

export interface ZodCommonConfigs {
  field: string;
  parentField?: string;
  isOptional?: boolean;
}

interface ZodCompareConfigs {
  min?: number | undefined;
  max?: number | undefined;
}

export interface ZodStringConfigs extends ZodCommonConfigs, ZodCompareConfigs {
  blockMultipleSpaces?: boolean;
  blockSingleSpace?: boolean;
  nonEmpty?: boolean;
  customRegex?: {
    regex: RegExp;
    message: string | number;
  };
}

export interface CheckUserPermission {
  userId: string | Types.ObjectId | UserModule.ITypes.IUser;
  checkId: string | Types.ObjectId | UserModule.ITypes.IUser;
  message: string;
  statusCode?: number;
}

export interface MultipleFileUploaderProps {
  files: Express.Multer.File[];
  folder?: string;
}
