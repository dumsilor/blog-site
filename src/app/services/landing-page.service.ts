import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { blogPost } from '../shared/models/blog-post.model';
import { POST_URL } from '../shared/constants/api.constant';

@Injectable({
  providedIn: 'root',
})
export class LandingPageService {
  constructor(private http: HttpClient) {}

  getAllBlogPosts() {
    return this.http.get<blogPost[]>(POST_URL);
  }
}
