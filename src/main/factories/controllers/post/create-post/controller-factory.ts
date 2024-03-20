import { BaseController } from "@infra/http/controllers/BaseController";
import { CreatePostController } from "@infra/http/controllers/posts/CreatePostController";
import { makeCreatePost } from "@main/factories/use-case/post/create-post-factory";
import { makeCreatePostValidation } from "./validation-factory";



export const makeCreatePostController = (): BaseController => {
    const validation = makeCreatePostValidation();
    const useCase = makeCreatePost();
    return new CreatePostController(validation, useCase);
}