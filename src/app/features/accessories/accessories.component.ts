import {Component, OnInit} from '@angular/core';
import {AccessoriesService} from '../../core/services/accessories.service';
import {CurrencyPipe, NgForOf, NgIf, PercentPipe} from '@angular/common';
import {LoaderComponent} from '../../shared/loader/loader.component';

@Component({
  selector: 'app-accessories',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    PercentPipe,
    CurrencyPipe,
    LoaderComponent
  ],
  templateUrl: './accessories.component.html',
  styleUrl: './accessories.component.scss'
})
export class AccessoriesComponent implements OnInit{
  accessories: any[] = [];
  constructor(private accessoriesService: AccessoriesService) {}

  ngOnInit(): void {
    this.accessoriesService.getAccessories().subscribe(
      (data) => {
        this.accessories = data;
      },
      (error)=>{
        console.log('Error while fetching accessories',error);
      }
    );
  }

}
