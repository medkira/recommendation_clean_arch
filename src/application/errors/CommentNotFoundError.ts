export class CommentNotFoundError extends Error {
  constructor() {
    super("the comment was not found");
    this.name = "CommentNotFound";
  }
}
