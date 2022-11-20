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
      title: 'Harry Potter',
      imagePreviewUrl: `http://prodimage.images-bn.com/pimages/9780590353427_p0_v2_s1200x630.jpg`,
      price: 100
    },
    {
      title: 'Lord of the rings',
      imagePreviewUrl: `https://m.media-amazon.com/images/I/51kfFS5-fnL._AC_SY780_.jpg`,
      price: 120
    },
    {
      title: 'Game of thornes',
      imagePreviewUrl: `https://m.media-amazon.com/images/I/51IHAPK5fsL._AC_SY780_.jpg`,
      price: 200
    }
  ]
}
