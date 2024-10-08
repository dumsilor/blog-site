import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { blogPost } from '../../../shared/models/blog-post.model';
import { ArticleService } from '../../../services/article.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent implements OnInit, OnDestroy {
  id!: string;
  articlePost!: blogPost;
  articlePostSubscription!: Subscription;

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
      this.articlePostSubscription = this.articleService
        .getArticleById(this.id)
        .subscribe((post) => {
          this.articlePost = post;
        });
    }
  }

  ngOnDestroy(): void {
    this.articlePostSubscription.unsubscribe();
  }
}
