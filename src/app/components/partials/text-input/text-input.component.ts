import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'text-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss',
})
export class TextInputComponent {
  @Input() type: 'text' | 'password' | 'email' = 'text';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() control!: AbstractControl;

  get formControl() {
    return this.control as FormControl;
  }
}
