import { Injectable } from '@angular/core';
import { Book } from './book.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Book[] = [];

  constructor() { }

  addToCart(book: Book): void {
    this.cart.push(book);
  }

  checkIfInCart(book: Book): boolean {
    return this.cart.findIndex(item => item.id === book.id) > -1;
  }

  removeFromCart(book: Book): void {
    const index = this.cart.findIndex(item => item.id === book.id);
    if (index > -1) {
      this.cart.splice(index, 1);
    }
  }
}
