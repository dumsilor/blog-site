export class blogPost {
  public _id!: string;
  public title!: string;
  public article!: string;

  constructor(title: string, article: string, id: string) {
    this.article = article;
    this.title = title;
    this._id = id;
  }
}
