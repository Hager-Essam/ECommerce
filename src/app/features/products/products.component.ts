import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../core/services/product.service';
import {CardComponent} from '../../shared/card/card.component';
import {LoaderComponent} from '../../shared/loader/loader.component';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CardComponent,
    LoaderComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{
  Products: any[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      (data) => {
        this.Products = data;
      },
      (error) => {
        console.log('Error while fetching Miscellaneous', error);
      }
    );
  }
}
