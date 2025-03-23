import {Component, OnInit} from '@angular/core';
import {AccessoriesService} from '../../core/services/accessories.service';
import {ClothesService} from '../../core/services/clothes.service';
import {CurrencyPipe, NgForOf, NgIf} from '@angular/common';
import {LoaderComponent} from '../../shared/loader/loader.component';

@Component({
  selector: 'app-clothes',
  standalone: true,
  imports: [
    CurrencyPipe,
    LoaderComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './clothes.component.html',
  styleUrl: './clothes.component.scss'
})
export class ClothesComponent {

}
