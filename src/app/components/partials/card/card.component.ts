import { Component, Input } from '@angular/core';
import { TruncatePipe } from '../../../shared/pipes/truncate.pipe';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [TruncatePipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  providers: []
})
export class CardComponent {
  @Input() title!: string;
  @Input() article!: string;

}
