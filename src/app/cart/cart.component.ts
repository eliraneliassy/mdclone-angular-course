import { Component } from '@angular/core';
import { Book } from '../book.interface';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cart: Book[] = [];

  constructor(
  private cartService: CartService,
  ) {
    this.cartService.cart.subscribe((cart) => {
      this.cart = cart
    })
  }

  addToCart(book: Book): void {
    this.cartService.addToCart(book);
  }

  checkIfInCart(book: Book): boolean {
    return this.cartService.checkIfInCart(book);
  }

  removeFromCart(book: Book): void {
    this.cartService.removeFromCart(book);
  }
}
