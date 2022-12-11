import { FeedService } from './feed.service';
import { CartService } from './cart.service';
import { Book } from './book.interface';
import { ApplicationRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private appRef: ApplicationRef) {
    // this.appRef.isStable.subscribe(console.log)
  }

  


  

  
}
