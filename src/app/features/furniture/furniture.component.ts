import {Component, OnInit} from '@angular/core';
import {CurrencyPipe, NgForOf, NgIf} from '@angular/common';
import {LoaderComponent} from '../../shared/loader/loader.component';
import {CardComponent} from '../../shared/card/card.component';
import {ProductService} from '../../core/services/product.service';

@Component({
  selector: 'app-furniture',
  standalone: true,
  imports: [
    CurrencyPipe,
    LoaderComponent,
    NgIf,
    NgForOf,
    CardComponent
  ],
  templateUrl: './furniture.component.html',
  styleUrl: './furniture.component.scss'
})
export class FurnitureComponent implements OnInit{
  furniture: any[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
      this.productService.getProductsByCategory(`furniture`).subscribe(
      (data)=>{
        this.furniture = data;
      },
      (error)=>{
        console.log('Error while fetching Electronics',error);
      }
    );
  }
}
