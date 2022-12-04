import { UserService } from './../user.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private userService: UserService) { }
  submit(form: NgForm) {
    this.userService.setUser(form.value.email);
  }
}
