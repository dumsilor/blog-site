import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { blogPost } from '../shared/models/blog-post.model';
import { POST_BY_ID_URL } from '../shared/constants/api.constant';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  getArticleById(id: string) {
    return this.http.get<blogPost>(POST_BY_ID_URL + id);
  }
}
