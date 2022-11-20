import { Book } from './../book.interface';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  @Input() book?: Book;
  @Input() bookInCart: boolean = false;

  @Output() addToCart: EventEmitter<Book> = new EventEmitter<Book>();
  @Output() removeFromCart: EventEmitter<Book> = new EventEmitter<Book>();

  addToCartClicked(){
    console.log('add to cart clicked');
    this.addToCart.emit(this.book);
  }
  remvoeFromCartClicked(){
    this.removeFromCart.emit(this.book);
  }

}
