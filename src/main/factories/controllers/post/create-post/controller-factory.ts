import { BaseController } from "@infra/http/controllers/BaseController";
import { CreatePostController } from "@infra/http/controllers/posts/CreatePostController";
import { makeCreatePost } from "@main/factories/use-case/post/create-post-factory";
import { makeCreatePostValidation } from "./validation-factory";
import { makeLoadUserById } from "@main/factories/use-case/user/load-user-by-id-factory";



export const makeCreatePostController = (): BaseController => {
    const validation = makeCreatePostValidation();
    const createPost = makeCreatePost();
    const loadUserById = makeLoadUserById();
    return new CreatePostController(validation, createPost, loadUserById);
}