import { FeedComponent } from './feed.component';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { BookModule } from '../book/book.module';


@NgModule({
  declarations: [
    FeedComponent
  ],
  imports: [
    CommonModule,
    FeedRoutingModule,
    BookModule
    
  ]
})
export class FeedModule { }
