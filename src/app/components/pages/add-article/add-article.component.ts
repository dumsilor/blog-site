import { Component, OnInit } from '@angular/core';
import { TextInputComponent } from '../../partials/text-input/text-input.component';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-article',
  standalone: true,
  imports: [TextInputComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.scss',
})
export class AddArticleComponent implements OnInit {
  articleForm = new FormGroup({
    title: new FormControl('', Validators.required),
    article: new FormControl('', Validators.required),
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.articleForm.value);
  }
}
