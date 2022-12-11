import { BookModule } from './book/book.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { CartComponent } from './cart/cart.component';

import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { NgNotIfDirective } from './ng-not-if.directive';
import { DiscountPipe } from './discount.pipe';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NgNotIfDirective,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
