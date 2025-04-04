import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'home',
    loadComponent: () => import('./layout/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'electronics',
    loadComponent: () => import('./features/electronics/electronics.component').then(m => m.ElectronicsComponent)
  },
  {
    path: 'clothes',
    loadComponent: () => import('./features/clothes/clothes.component').then(m => m.ClothesComponent)
  },
  {
    path: 'furniture',
    loadComponent: () => import('./features/furniture/furniture.component').then(m => m.FurnitureComponent)
  },
  {
    path: 'shoes',
    loadComponent: () => import('./features/shoes/shoes.component').then(m => m.ShoesComponent)
  },
  {
    path: 'product/:id',
    loadComponent: () => import( './shared/Product-Details/product-Details').then(m => m.ProductDetails)
  },
  {
    path: 'miscellaneous',
    loadComponent: () => import( './features/miscellaneous/miscellaneous.component').then(m => m.MiscellaneousComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import( './features/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: 'cart',
    loadComponent: () => import( './features/cart/cart.component').then(m => m.CartComponent)
  },
  {
    path: 'cart',
    loadComponent: () => import( './features/cart/cart.component').then(m => m.CartComponent)
  },
  {
    path: 'products',
    loadComponent: () => import( './features/products/products.component').then(m => m.ProductsComponent)
  },
  {
    path: 'login',
    loadComponent: () => import( './features/auth/login/login.component').then(m => m.LoginComponent)
  },

];

