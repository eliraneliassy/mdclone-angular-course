import { User } from './user.interface';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  constructor() { }

  getUser(): Observable<User | null> {
    return this._user.asObservable();
  }

  setUser(email: string) {
    const newUser: User = { email };
    this._user.next(newUser)
  }

  logout() {
    this._user.next(null);
  }


}
