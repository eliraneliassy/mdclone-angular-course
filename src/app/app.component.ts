import { Book } from './book.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  books: Book[] = [
    {
      id : '1',
      title: 'Harry Potter',
      imagePreviewUrl: `http://prodimage.images-bn.com/pimages/9780590353427_p0_v2_s1200x630.jpg`,
      price: 100
    },
    {
      id : '2',
      title: 'Lord of the rings',
      imagePreviewUrl: `https://m.media-amazon.com/images/I/51kfFS5-fnL._AC_SY780_.jpg`,
      price: 120
    },
    {
      id : '3',
      title: 'Game of thornes',
      imagePreviewUrl: `https://m.media-amazon.com/images/I/51IHAPK5fsL._AC_SY780_.jpg`,
      price: 200
    }
  ];

  cart: Book[] = [];

  addToCart(book: Book) {
    this.cart.push(book);
    console.log(this.cart);
  }

  checkIfInCart(book: Book) {
    return this.cart.findIndex(item => item.id === book.id) > -1;
  }
}
