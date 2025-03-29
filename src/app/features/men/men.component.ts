import {Component, OnInit} from '@angular/core';
import {ClothesService} from '../../core/services/clothes.service';
import {CurrencyPipe, NgForOf, NgIf} from '@angular/common';
import {LoaderComponent} from '../../shared/loader/loader.component';

@Component({
  selector: 'app-men',
  standalone: true,
  imports: [
    NgForOf,
    LoaderComponent,
    NgIf,
    CurrencyPipe
  ],
  templateUrl: './men.component.html',
  styleUrl: './men.component.scss'
})
export class MenComponent implements OnInit {
  clothes: any[] = [];
  menClothes: any[] = [];

  constructor(private clothesService: ClothesService) {
  }

  ngOnInit() {
    this.clothesService.getAllProducts().subscribe((data) => {
      this.clothes = data;
    });
  }
  //
  // categorizeProducts() {
  //   this.clothes.forEach(product => {
  //     const lowerTitle = product.title.toLowerCase();
  //     const lowerDesc = product.description.toLowerCase();
  //
  //     if (lowerTitle.includes('men') || lowerDesc.includes('men')) {
  //       this.menClothes.push(product);
  //     }
  //   });
  // }
}
