import { multerMiddleware } from "@main/middlewares/multer-middleware";

export const makePostImageMulterMiddleware = () => {
  const uploadFields = [
    {
      name: "postImage",
      maxCount: 5,
    },
    {
      name: "image",
      maxCount: 2,
    },
  ];

  return multerMiddleware(uploadFields);
};
