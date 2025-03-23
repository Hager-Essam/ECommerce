import {Component, OnInit} from '@angular/core';
import {ClothesService} from '../../core/services/clothes.service';
import {CurrencyPipe, NgForOf, NgIf} from '@angular/common';
import {LoaderComponent} from '../../shared/loader/loader.component';

@Component({
  selector: 'app-women',
  standalone: true,
  imports: [
    CurrencyPipe,
    LoaderComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './women.component.html',
  styleUrl: './women.component.scss'
})
export class WomenComponent implements OnInit {
  clothes: any[] = [];

  constructor(private clothesService: ClothesService) {
  }

  ngOnInit() {
    this.clothesService.getProductsByCategory("women's clothing").subscribe((data) => {
      this.clothes = data;
    });
  }
}
