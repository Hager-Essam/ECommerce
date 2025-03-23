import { Routes } from '@angular/router';
import {HomeComponent} from './layout/home/home.component';
import {UserComponent} from './features/user/user.component';
import {ElectronicsComponent} from './features/electronics/electronics.component';
import {ClothesComponent} from './features/clothes/clothes.component';
import {FurnitureComponent} from './features/furniture/furniture.component';
import {AccessoriesComponent} from './features/accessories/accessories.component';

export const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'electronics',component:ElectronicsComponent},
  {path:'clothes',component:ClothesComponent},
  {path:'furniture',component:FurnitureComponent},
  {path:'accessories',component:AccessoriesComponent},
];
