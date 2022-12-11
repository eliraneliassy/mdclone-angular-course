import { Component, OnDestroy, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject, switchMap, map, catchError, EMPTY, of, timer, tap, Subscription, Observable } from 'rxjs';
import { Book } from '../book.interface';
import { CartService } from '../cart.service';
import { FeedService } from '../feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss', '../app.component.scss']
})
export class FeedComponent implements OnDestroy, OnInit {

  backgroundColor: string = 'red';

  books$?: Observable<Book[]>;

  search$: Subject<string> = new Subject<string>();
  subscription?: Subscription;

  constructor(
    private cartService: CartService,
    private feedService: FeedService) {

  }
  ngOnInit(): void {
    this.search$
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        // map((term: string) => 'Harry Potter'),

        switchMap((term: string) => this.feedService.getBooks(term)),

      );

      this.subscription = timer(0, 1000)
      .pipe( 
       //  tap(console.log)
      )
      .subscribe(console.log);

  }
  ngOnDestroy(): void {
    console.log('Destory');
    this.subscription?.unsubscribe();

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

  search(target: any) {
    if (target.value.trim() !== '') {
      this.search$.next(target.value);
    }

  }

}
