import {Component, Input} from '@angular/core';
import {CurrencyPipe, NgForOf, NgIf, NgStyle} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {CartService} from '../../core/services/cart.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgIf,
    RouterLink,
    NgForOf,
    NgStyle
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() product: any;
  @Input() index: number = 0;

  constructor(private router: Router) {
  }


  goToProductPage() {
    this.router.navigate(['/product', this.product.id]);
  }

}
