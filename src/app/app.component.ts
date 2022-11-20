import { Book } from './book.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  book: Book = {
    title: 'Harry Potter',
    imagePreviewUrl: `http://prodimage.images-bn.com/pimages/9780590353427_p0_v2_s1200x630.jpg`,
    price: 100
  }
}
