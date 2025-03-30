import {Component, OnInit} from '@angular/core';
import {CardComponent} from "../../shared/card/card.component";
import {LoaderComponent} from "../../shared/loader/loader.component";
import {NgForOf, NgIf} from "@angular/common";
import {ProductService} from '../../core/services/product.service';

@Component({
  selector: 'app-miscellaneous',
  standalone: true,
    imports: [
        CardComponent,
        LoaderComponent,
        NgForOf,
        NgIf
    ],
  templateUrl: './miscellaneous.component.html',
  styleUrl: './miscellaneous.component.scss'
})
export class MiscellaneousComponent implements OnInit{
  Miscellaneous: any[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getProductsByCategory(`miscellaneous`).subscribe(
      (data)=>{
        this.Miscellaneous = data;
      },
      (error)=>{
        console.log('Error while fetching Miscellaneous',error);
      }
    );
  }
}
