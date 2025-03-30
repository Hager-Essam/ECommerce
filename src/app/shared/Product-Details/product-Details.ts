import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink, RouterModule} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductService} from '../../core/services/product.service';
import {CurrencyPipe, NgIf} from '@angular/common';

@Component({
  selector: 'app-Product-Details',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    CurrencyPipe
  ],
  templateUrl: './product-Details.html',
  styleUrl: './product-Details.scss'
})
export class ProductDetails implements OnInit {
  productId: string | null = '';
  product: any;


  constructor(private route: ActivatedRoute, private productService: ProductService) {
  }


  ngOnInit() {

    const productId = this.route.snapshot.paramMap.get('id'); // Get product ID from URL

    if (productId) {
      this.productService.getProductById(productId).subscribe(
        (data) => {
          this.product = data; // Store the product data
        },
        (error) => {
          console.error('Error fetching product:', error);
        }
      );
    }
  }
}
