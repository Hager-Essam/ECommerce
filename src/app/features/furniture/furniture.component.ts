import {Component, OnInit} from '@angular/core';
import {log} from 'node:util';
import {FurnitureService} from '../../core/services/furniture.service';
import {CurrencyPipe, NgForOf, NgIf} from '@angular/common';
import {LoaderComponent} from '../../shared/loader/loader.component';

@Component({
  selector: 'app-furniture',
  standalone: true,
  imports: [
    CurrencyPipe,
    LoaderComponent,
    NgIf,
    NgForOf
  ],
  templateUrl: './furniture.component.html',
  styleUrl: './furniture.component.scss'
})
export class FurnitureComponent{

}
