import { CreatePostRepository } from "@application/interfaces/repositories/post/CreatePostRepository";
import { CreatePostInterface } from "@application/interfaces/use-cases/posts/CreatePostInterface";
import { PostImageProcess } from "@application/interfaces/utils/image-processing/PostImageProcess";
import { UploadImage } from "@application/interfaces/utils/upload/UploadImage";
import { File } from "@domain/entities/File";

export class CreatePost implements CreatePostInterface {
  constructor(
    private readonly createPostRepository: CreatePostRepository,
    private readonly uploadImage: UploadImage,
    private readonly imageProcess: PostImageProcess
  ) { }

  async execute(postData: CreatePostInterface.Request): Promise<string> {
    const { postImage, content, post_type, title, location, userId, user_name, rate } = postData;
    const fileImage = postImage as File[];
    const imageUrls: string[] = [];

    if (postImage) {
      for (let i = 0; i < fileImage.length; i++) {
        const imageBuffer = await this.imageProcess.PostImageProcess(
          fileImage[i].buffer
        );
        const imageUrl = await this.uploadImage.uploadImage(imageBuffer);
        imageUrls.push(imageUrl);
      }
    }
    return this.createPostRepository.createPost({
      userId,
      content,
      post_type,
      title,
      location,
      likes: 0,
      postImage: imageUrls,
      user_name,
      rate
    });
  }
}
