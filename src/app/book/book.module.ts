import { DiscountPipe } from './../discount.pipe';
import { BookComponent } from './book.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    BookComponent,
    DiscountPipe
  ],
  exports: [
    BookComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BookModule { }
