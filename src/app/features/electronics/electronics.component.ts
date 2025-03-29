import {Component, OnInit} from '@angular/core';
import {ElectronicsService} from '../../core/services/electronics.service';
import {CurrencyPipe, NgForOf, NgIf} from '@angular/common';
import {LoaderComponent} from '../../shared/loader/loader.component';
import {CardComponent} from '../../shared/card/card.component';

@Component({
  selector: 'app-electronics',
  standalone: true,
  imports: [
    CurrencyPipe,
    LoaderComponent,
    NgForOf,
    NgIf,
    CardComponent
  ],
  templateUrl: './electronics.component.html',
  styleUrl: './electronics.component.scss'
})
export class ElectronicsComponent implements OnInit {
  electronics: any[] = [];

  constructor(private electronicsService: ElectronicsService) {
  }

  ngOnInit(): void {
    this.electronicsService.getElectronics().subscribe(
      (data)=>{
        this.electronics = data;
      },
      (error)=>{
        console.log('Error while fetching Electronics',error);
      }
    );
  }
}
