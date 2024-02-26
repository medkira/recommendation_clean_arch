export type PostProps = {
  id: string;
  title: string;
  content: string;
  postImage: string;
  author_id: string;
  likes: number;
  createdAt: Date;
  updatedAt: Date;
  post_type: postType;
};

export class Post {
  public readonly id: string;
  public readonly title: string;
  public readonly content: string;
  public readonly postImage: string;
  public readonly author_id: string;
  public readonly likes: number;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;
  public readonly post_type: postType;

  constructor(props: PostProps) {
    this.id = props.id;
    this.title = props.title;
    this.content = props.content;
    this.postImage = props.postImage;
    this.author_id = props.author_id;
    this.likes = props.likes;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.post_type = props.post_type;
  }
}

export enum postType {
  food = "food",
  place = "place",
}
