import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<any[]>(this.getCartFromStorage());
  cartItems$ = this.cartItems.asObservable();

  constructor() {}

  private getCartFromStorage(): any[] {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  }

  private saveCartToStorage(cart: any[]): void {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  addToCart(product: any): void {
    let cart = this.cartItems.value;
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    this.cartItems.next(cart);
    this.saveCartToStorage(cart);
  }

  removeFromCart(productId: number): void {
    let cart = this.cartItems.value.filter((item) => item.id !== productId);
    this.cartItems.next(cart);
    this.saveCartToStorage(cart);
  }

  updateQuantity(productId: number, quantity: number): void {
    let cart = this.cartItems.value.map((item) =>
      item.id === productId ? { ...item, quantity } : item
    );
    this.cartItems.next(cart);
    this.saveCartToStorage(cart);
  }

  clearCart(): void {
    this.cartItems.next([]);
    localStorage.removeItem('cart');
  }
}
