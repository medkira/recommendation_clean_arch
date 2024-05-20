import { File } from "@domain/entities/File";

export type PostProps = {
  id: string;
  title: string;
  content: string;
  postImage: File[] | string[];
  userId: string;
  user_name: string;
  likes: number;
  createdAt: Date;
  updatedAt: Date;
  post_type: postType;
  location: string;
  totalComments: number;
  rate: number;

};

export class Post {
  public readonly id: string;
  public readonly title: string;
  public readonly content: string;
  public readonly postImage: File[] | string[];
  public readonly userId: string;
  public readonly user_name: string;
  public readonly likes: number;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;
  public readonly post_type: postType;
  public readonly location: string;
  public readonly totalComments: number;
  public readonly rate: number;

  constructor(props: PostProps) {
    this.id = props.id;
    this.title = props.title;
    this.content = props.content;
    this.postImage = props.postImage;
    this.userId = props.userId;
    this.user_name = props.user_name;
    this.likes = props.likes;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.post_type = props.post_type;
    this.location = props.location;
    this.totalComments = props.totalComments;
    this.rate = props.rate;

  }
}

export enum postType {
  food = "food",
  place = "place",
}
