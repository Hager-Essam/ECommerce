import {Component, OnInit} from '@angular/core';
import {CurrencyPipe, NgForOf, NgIf, PercentPipe} from '@angular/common';
import {LoaderComponent} from '../../shared/loader/loader.component';
import {CardComponent} from '../../shared/card/card.component';

@Component({
  selector: 'app-accessories',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    PercentPipe,
    CurrencyPipe,
    LoaderComponent,
    CardComponent
  ],
  templateUrl: './accessories.component.html',
  styleUrl: './accessories.component.scss'
})
export class AccessoriesComponent {
  // accessories: any[] = [];
  // constructor(private productService: ProductService) {}
  //
  // ngOnInit(): void {
  //   this.accessoriesService.getAccessories().subscribe(
  //     (data) => {
  //       this.accessories = data;
  //     },
  //     (error)=>{
  //       console.log('Error while fetching accessories',error);
  //     }
  //   );
  // }

}
