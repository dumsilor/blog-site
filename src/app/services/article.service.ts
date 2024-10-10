import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { blogPost } from '../shared/models/blog-post.model';
import { POST_ADD_URL, POST_BY_ID_URL } from '../shared/constants/api.constant';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  getArticleById(id: string) {
    return this.http.get<blogPost>(POST_BY_ID_URL + id);
  }

  addNewArticle(formData: any) {
    return this.http.post(POST_ADD_URL, formData).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
