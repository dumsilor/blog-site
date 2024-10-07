export class blogPost{
    public title!: string;
    public article!: string;

    constructor(title: string, article: string) {
        this.article = article;
        this.title = title;
    }
}