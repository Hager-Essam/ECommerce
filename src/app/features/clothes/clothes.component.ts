import {Component, OnInit} from '@angular/core';
import {AccessoriesService} from '../../core/services/accessories.service';
import {ClothesService} from '../../core/services/clothes.service';
import {CurrencyPipe, NgForOf, NgIf} from '@angular/common';
import {LoaderComponent} from '../../shared/loader/loader.component';
import {data} from 'autoprefixer';
import {CardComponent} from "../../shared/card/card.component";

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
  constructor(private clothesService: ClothesService) {}

  ngOnInit() {
    this.clothesService.getAllProducts().subscribe((data) => {

    this.clothes = data;
    });
  }


}
