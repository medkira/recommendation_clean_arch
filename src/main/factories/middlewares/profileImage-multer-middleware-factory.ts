import { multerMiddleware } from "@main/middlewares/multer-middleware"

export const makeProfileImageMulterMiddleware = () => {
    const uploadFields = [{
        name: 'profileImage',
        maxCount: 2,
    },
    {
        name: 'image',
        maxCount: 2
    }
    ]

    return multerMiddleware(uploadFields)
}