import {Component, OnInit} from '@angular/core';
import {ClothesService} from '../../core/services/clothes.service';
import {CurrencyPipe, NgForOf, NgIf} from '@angular/common';
import {LoaderComponent} from '../../shared/loader/loader.component';

@Component({
  selector: 'app-kids',
  standalone: true,
  imports: [
    NgIf,
    LoaderComponent,
    CurrencyPipe,
    NgForOf
  ],
  templateUrl: './kids.component.html',
  styleUrl: './kids.component.scss'
})
export class KidsComponent implements OnInit{
  clothes: any[] = [];

  constructor(private clothesService: ClothesService) {
  }

  ngOnInit() {
    this.clothesService.getProductsByCategory("kids clothing").subscribe((data) => {
      this.clothes = data;
    });
  }
}
