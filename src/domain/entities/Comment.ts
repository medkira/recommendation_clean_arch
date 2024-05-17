export type CommentProps = {
  id: string;
  userId: string;
  postId: string;
  title: string;
  text: string;
  likes: number;
  createdAt: Date;
  updatedAt: Date;
  username: string;
};

export class Comment {
  public readonly id: string;

  public readonly userId: string;
  public readonly likes: number;

  public readonly postId: string;

  public readonly title?: string;

  public readonly text: string;

  public readonly createdAt: Date;

  public readonly updatedAt?: Date;

  public readonly username: String;

  constructor(props: CommentProps) {
    this.id = props.id;
    this.userId = props.userId;
    this.postId = props.postId;
    this.title = props.title;
    this.likes = props.likes;
    this.text = props.text;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.username = props.username;
  }
}
