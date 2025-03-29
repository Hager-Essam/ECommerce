import {Component, Input} from '@angular/core';
import {CurrencyPipe, NgIf} from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgIf
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() product: any;
}
