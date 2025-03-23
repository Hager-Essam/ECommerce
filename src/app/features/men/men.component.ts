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
export class MenComponent implements OnInit{
  clothes: any[] = [];

  constructor(private clothesService: ClothesService) {}

  ngOnInit() {
    this.clothesService.getProductsByCategory("men's clothing").subscribe((data) => {
      this.clothes = data;
    });
  }
}
