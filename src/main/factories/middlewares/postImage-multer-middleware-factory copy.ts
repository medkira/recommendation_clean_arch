import { multerMiddleware } from "@main/middlewares/multer-middleware";

export const makePostImageMulterMiddleware = () => {
  const uploadFields = [
    {
      name: "postImage",
      maxCount: 5,
    },
    {
      name: "placeImage",
      maxCount: 5,
    },
    {
      name: "foodImage",
      maxCount: 5,
    },
    {
      name: "menuImage",
      maxCount: 2,
    },
  ];

  return multerMiddleware(uploadFields);
};
