import { CartService } from './../cart.service';
import { User } from './../user.interface';
import { UserService } from './../user.service';
import { Component, DoCheck, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnDestroy {
  user: User | null = null;
  userSubscription?: Subscription;
  cartSubscription?: Subscription;

  numberOfItemInCart: number = 0;
  constructor(
    private userService: UserService,
    private cartService: CartService
  ) {
    this.userSubscription = this.userService.getUser().subscribe((user: User | null) => {
      this.user = user
    })

    this.cartSubscription = this.cartService.cart.subscribe((cart) => {
      this.numberOfItemInCart = this.cartService.gerNumberOfItemsInCart()
    })

    // this.numberOfItemInCart = this.cartService.gerNumberOfItemsInCart();
  }
  ngOnDestroy(): void {
    this.cartSubscription?.unsubscribe();
    this.userSubscription?.unsubscribe();
  }

}
