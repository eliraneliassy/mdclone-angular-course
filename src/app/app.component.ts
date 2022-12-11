import { FeedService } from './feed.service';
import { CartService } from './cart.service';
import { Book } from './book.interface';
import { ApplicationRef, ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  books$: Observable<string[]>;

  constructor(
    private appRef: ApplicationRef,
    private feedService: FeedService,
    private cdr: ChangeDetectorRef) {
    // this.appRef.isStable.subscribe(console.log)

    this.books$ = this.feedService.getBooks('Angular')
    .pipe(
      map((books: Book[]) => books.map(book => book.title))
    );
  }







}
