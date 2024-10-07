import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';
import { ArticleComponent } from './components/pages/article/article.component';
import { AddArticleComponent } from './components/pages/add-article/add-article.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'article/:id', component: ArticleComponent },
  { path: 'add', component: AddArticleComponent },
];
