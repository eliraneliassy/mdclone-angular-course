import { User } from './../user.interface';
import { UserService } from './../user.service';
import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  user: User | null = null;
  constructor(private userService: UserService) {
    this.userService.getUser().subscribe((user: User | null) => {
      this.user = user
    })
  }

}
