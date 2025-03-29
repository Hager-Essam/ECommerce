import {Component, OnInit} from '@angular/core';
import {LoaderComponent} from '../../shared/loader/loader.component';
import {CurrencyPipe, NgForOf, NgIf} from '@angular/common';
import {ClothesService} from '../../core/services/clothes.service';
import {ShoesService} from '../../core/services/shoes.service';
import {CardComponent} from '../../shared/card/card.component';

@Component({
  selector: 'app-shoes',
  standalone: true,
  imports: [
    LoaderComponent,
    NgIf,
    NgForOf,
    CurrencyPipe,
    CardComponent
  ],
  templateUrl: './shoes.component.html',
  styleUrl: './shoes.component.scss'
})
export class ShoesComponent implements OnInit {
  shoes: any[] = [];

  constructor(private shoesService: ShoesService) {
  }

  ngOnInit() {
    this.shoesService.getAllProducts().subscribe((data) => {
      this.shoes = data;
    });
  }
}
