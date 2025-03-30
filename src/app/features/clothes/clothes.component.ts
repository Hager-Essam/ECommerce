import {Component, OnInit} from '@angular/core';
import {CurrencyPipe, NgForOf, NgIf} from '@angular/common';
import {LoaderComponent} from '../../shared/loader/loader.component';
import {CardComponent} from "../../shared/card/card.component";
import {ProductService} from '../../core/services/product.service';

@Component({
  selector: 'app-clothes',
  standalone: true,
    imports: [
        CurrencyPipe,
        LoaderComponent,
        NgForOf,
        NgIf,
        CardComponent
    ],
  templateUrl: './clothes.component.html',
  styleUrl: './clothes.component.scss'
})
export class ClothesComponent implements OnInit{

  clothes: any[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProductsByCategory('clothes').subscribe((data) => {

    this.clothes = data;
    });
  }


}
