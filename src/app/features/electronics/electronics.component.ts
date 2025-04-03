import {Component, OnInit} from '@angular/core';
import {CurrencyPipe, JsonPipe, NgForOf, NgIf} from '@angular/common';
import {LoaderComponent} from '../../shared/loader/loader.component';
import {CardComponent} from '../../shared/card/card.component';
import {RouterLink} from '@angular/router';
import {ProductService} from '../../core/services/product.service';

@Component({
  selector: 'app-electronics',
  standalone: true,
  imports: [
    CurrencyPipe,
    LoaderComponent,
    NgForOf,
    NgIf,
    CardComponent,
    RouterLink,
    JsonPipe
  ],
  templateUrl: './electronics.component.html',
  styleUrl: './electronics.component.scss'
})
export class ElectronicsComponent implements OnInit {
  electronics: any[] = [];

  constructor(private productService: ProductService) {
  }


  ngOnInit(): void {

    this.productService.getProductsByCategory('electronics').subscribe(
      (data) => {
        this.electronics = data;
      },
      (error) => {
        console.log('Error while fetching Electronics', error);
      }
    );
  }
}
