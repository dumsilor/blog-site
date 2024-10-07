import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { blogPost } from '../../../shared/models/blog-post.model';
import { ArticleService } from '../../../services/article.service';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent implements OnInit {
  id!: string;
  articlePost!: blogPost;

  constructor(
    private avtivatedRoute: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    this.id = this.avtivatedRoute.snapshot.params['id'];

    if (this.articleService.getArticleById(this.id) == undefined) {
      console.log('No Article found with id: ' + this.id);
      return;
    } else {
      this.articlePost = this.articleService.getArticleById(this.id)!;
    }
  }
}
