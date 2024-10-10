import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { blogPost } from '../../../shared/models/blog-post.model';
import { ArticleService } from '../../../services/article.service';
import { Subscription } from 'rxjs';
import { DefaultButtonComponent } from '../../partials/default-button/default-button.component';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [DefaultButtonComponent],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent implements OnInit, OnDestroy {
  id!: string;
  articlePost?: blogPost;
  articlePostSubscription!: Subscription;

  constructor(
    private avtivatedRoute: ActivatedRoute,
    private articleService: ArticleService,
    private router: Router
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

  back() {
    this.router.navigateByUrl('/');
  }
}
