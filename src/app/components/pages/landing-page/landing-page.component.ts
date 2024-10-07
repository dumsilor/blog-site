import { Component, OnInit } from '@angular/core';
import { CardComponent } from "../../partials/card/card.component";
import { LandingPageService } from '../../../shared/services/landing-page.service';
import { blogPost } from '../../../shared/models/blog-post.model';
import { CommonModule } from '@angular/common';
import { DefaultButtonComponent } from "../../partials/default-button/default-button.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CardComponent, CommonModule, DefaultButtonComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit {
  blogPosts!: blogPost[];
  constructor(private landingPageService: LandingPageService) {}
  ngOnInit(): void {
      this.blogPosts = this.landingPageService.getAllBlogPosts();
  }

  buttonClicked() {
    console.log("Button Clicked")
  }
}
