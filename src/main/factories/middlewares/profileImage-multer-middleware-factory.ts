import { multerMiddleware } from "@main/middlewares/multer-middleware"

export const makeProfileImageMulterMiddleware = () => {
    const uploadFields = [{
        name: 'profileImage',
        maxCount: 1
    }]

    return multerMiddleware(uploadFields)
}