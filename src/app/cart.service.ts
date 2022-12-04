import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Book } from './book.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);

  constructor() { }

  addToCart(book: Book): void {
    // this.cart.push(book);
    const currentCart: Book[] = this.cart.getValue();
    currentCart.push(book);
    this.cart.next(currentCart);
  }

  checkIfInCart(book: Book): boolean {
    const currentCart: Book[] = this.cart.getValue();
    return currentCart.findIndex(item => item.id === book.id) > -1;
  }

  removeFromCart(book: Book): void {
    const currentCart: Book[] = this.cart.getValue();
    const index = currentCart.findIndex(item => item.id === book.id);
    if (index > -1) {
      currentCart.splice(index, 1);
    }

    this.cart.next(currentCart);
  }

  gerNumberOfItemsInCart(): number {
    const currentCart: Book[] = this.cart.getValue();
    return currentCart.length;
  }
}
