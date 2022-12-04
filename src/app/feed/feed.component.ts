import { Component } from '@angular/core';
import { Book } from '../book.interface';
import { CartService } from '../cart.service';
import { FeedService } from '../feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {

  backgroundColor: string = 'red';

  books: Book[] = [];

  constructor(
    private cartService: CartService,
    private feedService: FeedService) {
    this.feedService.getBooks('Angular').subscribe((result: Book[]) => {
      // TODO: set books
      this.books = result

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
