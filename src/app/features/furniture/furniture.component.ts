import {Component, OnInit} from '@angular/core';
import {log} from 'node:util';
import {FurnitureService} from '../../core/services/furniture.service';
import {CurrencyPipe, NgForOf, NgIf} from '@angular/common';
import {LoaderComponent} from '../../shared/loader/loader.component';
import {ElectronicsService} from '../../core/services/electronics.service';
import {CardComponent} from '../../shared/card/card.component';

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
export class FurnitureComponent{
  furniture: any[] = [];

  constructor(private furnitureService: FurnitureService,) {
  }

  ngOnInit(): void {
    this.furnitureService.getFurniture().subscribe(
      (data)=>{
        this.furniture = data;
      },
      (error)=>{
        console.log('Error while fetching Electronics',error);
      }
    );
  }
}
