import { Injectable } from '@angular/core';
import { sample_posts } from '../../blog-post';

@Injectable({
  providedIn: 'root',
})
export class LandingPageService {
  getAllBlogPosts() {
    return sample_posts;
  }
}
