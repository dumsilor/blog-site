import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../partials/card/card.component';
import { blogPost } from '../../../shared/models/blog-post.model';
import { CommonModule } from '@angular/common';
import { DefaultButtonComponent } from '../../partials/default-button/default-button.component';
import { Router, RouterModule } from '@angular/router';
import { LandingPageService } from '../../../services/landing-page.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CardComponent, CommonModule, DefaultButtonComponent, RouterModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent implements OnInit {
  blogPosts!: blogPost[];
  constructor(
    private landingPageService: LandingPageService,
    private roueter: Router
  ) {}
  ngOnInit(): void {
    this.blogPosts = this.landingPageService.getAllBlogPosts();
  }

  buttonClicked() {
    this.roueter.navigateByUrl('/add');
  }
}
