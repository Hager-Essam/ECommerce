import {Component, OnInit} from '@angular/core';
import {LoaderComponent} from '../../shared/loader/loader.component';
import {CurrencyPipe, NgForOf, NgIf} from '@angular/common';
import {CardComponent} from '../../shared/card/card.component';
import {ProductService} from '../../core/services/product.service';

@Component({
  selector: 'app-shoes',
  standalone: true,
  imports: [
    LoaderComponent,
    NgIf,
    NgForOf,
    CurrencyPipe,
    CardComponent
  ],
  templateUrl: './shoes.component.html',
  styleUrl: './shoes.component.scss'
})
export class ShoesComponent implements OnInit {
  shoes: any[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getProductsByCategory('shoes').subscribe((data) => {
      this.shoes = data;
    });
  }
}
