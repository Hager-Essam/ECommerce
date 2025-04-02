import {Routes} from '@angular/router';
import {HomeComponent} from './layout/home/home.component';
import {ElectronicsComponent} from './features/electronics/electronics.component';
import {ClothesComponent} from './features/clothes/clothes.component';
import {FurnitureComponent} from './features/furniture/furniture.component';
// import {AccessoriesComponent} from './features/accessories/accessories.component';
import {ShoesComponent} from './features/shoes/shoes.component';
import {ProductDetails} from './shared/Product-Details/product-Details';
import {MiscellaneousComponent} from './features/miscellaneous/miscellaneous.component';
import {ContactComponent} from './features/contact/contact.component';
import {CartComponent} from './features/cart/cart.component';
import {ProductsComponent} from './features/products/products.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'electronics', component: ElectronicsComponent},
  {path: 'clothes', component: ClothesComponent},
  {path: 'furniture', component: FurnitureComponent},
  // {path:'accessories',component:AccessoriesComponent},
  {path: 'shoes', component: ShoesComponent},
  {path: 'product/:id', component: ProductDetails},
  {path: 'miscellaneous', component: MiscellaneousComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'cart', component: CartComponent},
  {path:'products',component:ProductsComponent}
];

