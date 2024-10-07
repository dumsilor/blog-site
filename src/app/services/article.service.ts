import { Injectable } from "@angular/core";
import { sample_posts } from "../../blog-post";

@Injectable({
    providedIn: 'root'
})

export class ArticleService {

    getArticleById(id: string) {
        return sample_posts.find(post=> post.id === id)
    }
}