export class blogPost{
    public id!: string
    public title!: string;
    public article!: string;

    constructor(title: string, article: string, id: string) {
        this.article = article;
        this.title = title;
        this.id = id;
    }
}