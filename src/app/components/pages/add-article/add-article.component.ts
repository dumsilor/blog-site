import { Component, OnInit } from '@angular/core';
import { TextInputComponent } from '../../partials/text-input/text-input.component';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DefaultButtonComponent } from '../../partials/default-button/default-button.component';

@Component({
  selector: 'app-add-article',
  standalone: true,
  imports: [
    TextInputComponent,
    CommonModule,
    ReactiveFormsModule,
    DefaultButtonComponent,
  ],
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.scss',
})
export class AddArticleComponent implements OnInit {
  articleForm = new FormGroup({
    title: new FormControl('', Validators.required),
    article: new FormControl('', Validators.required),
  });

  constructor() {}

  ngOnInit(): void {
    console.log(this.articleForm.controls['title']);
  }

  onSubmit() {
    console.log(this.articleForm.value);
  }

}
