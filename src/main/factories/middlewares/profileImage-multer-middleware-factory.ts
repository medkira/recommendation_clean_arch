import { multerMiddleware } from "@main/middlewares/multer-middleware"
import multer from "multer"

export const makeProfileImageMulterMiddleware = () => {
  const uploadFields: multer.Field[] = [{
    name: 'profileImage',
    maxCount: 1,
  }
  ]

  return multerMiddleware(uploadFields);
}