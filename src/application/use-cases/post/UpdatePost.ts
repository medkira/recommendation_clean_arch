import { PostNotFoundError } from "@application/errors/PostNotFoundError";
import { PostImageProcess } from "@application/interfaces/image-processing/PostImageProcess";
import { GetPostByIdRepository } from "@application/interfaces/repositories/post/GetPostByIdRepository";
import { UpdatePostRepository } from "@application/interfaces/repositories/post/UpdatePostRepository";
import { UploadImage } from "@application/interfaces/upload/UploadImage";
import { UpdatePostInterface } from "@application/interfaces/use-cases/posts/UpdatePostInterface";
import { File } from "@domain/entities/File";

export class UpdatePost implements UpdatePostInterface {
  constructor(
    private readonly getPostByIdRepository: GetPostByIdRepository,
    private readonly updatePostRepository: UpdatePostRepository,
    private readonly uploadImage: UploadImage,
    private readonly imageProcess: PostImageProcess
  ) {}

  async execute(
    params: UpdatePostInterface.Request
  ): Promise<UpdatePostInterface.Rsponse> {
    const { postId, postData } = params;
    let { postImage } = postData;

    const imageUrls: string[] = [];

    if (postImage) {
      const fileImage = postImage as File[];
      for (let i = 0; i < fileImage.length; i++) {
        const imageBuffer = await this.imageProcess.PostImageProcess(
          fileImage[i].buffer
        );
        const imageUrl = await this.uploadImage.uploadImage(imageBuffer);
        imageUrls.push(imageUrl);
      }
    }

    const post = await this.getPostByIdRepository.getPostById(postId); // Assuming getPostByIdRepository returns a promise
    if (!post) {
      return new PostNotFoundError();
    }

    return this.updatePostRepository.updatePost({ postId, postData });
  }
}
