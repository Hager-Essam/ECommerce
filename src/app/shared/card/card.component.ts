import {Component, Input} from '@angular/core';
import {CurrencyPipe, NgIf} from '@angular/common';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgIf,
    RouterLink
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() product: any;

  constructor(private router: Router) {
  }

  goToProductPage() {
    this.router.navigate(['/product', this.product.id]);
  }

}
