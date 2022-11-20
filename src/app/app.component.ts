import { FeedService } from './feed.service';
import { CartService } from './cart.service';
import { Book } from './book.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  backgroundColor: string = 'red';


  books: Book[] = [
    {
      id: '1',
      title: 'Harry Potter',
      imagePreviewUrl: `http://prodimage.images-bn.com/pimages/9780590353427_p0_v2_s1200x630.jpg`,
      price: 100
    },
    {
      id: '2',
      title: 'Lord of the rings',
      imagePreviewUrl: `https://m.media-amazon.com/images/I/51kfFS5-fnL._AC_SY780_.jpg`,
      price: 120
    },
    {
      id: '3',
      title: 'Game of thornes',
      imagePreviewUrl: `https://m.media-amazon.com/images/I/51IHAPK5fsL._AC_SY780_.jpg`,
      price: 200
    }
  ];

  cart: Book[] = this.cartService.cart;

  constructor(
    private cartService: CartService,
    private feedService: FeedService) {
    this.feedService.getBooks('Angular').subscribe((result: any) => {
      // TODO: set books 

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
