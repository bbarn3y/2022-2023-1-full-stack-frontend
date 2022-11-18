import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggedIn: boolean;
  loggedInStatus: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
    this.loggedIn = this.isLoggedIn();
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  storeToken(token: string): void {
    localStorage.setItem('token', token);
    this.loggedIn = true;
    this.loggedInStatus.emit(true);
  }

  removeToken(): void {
    localStorage.removeItem('token');
    this.loggedIn = false;
    this.loggedInStatus.emit(false);
  }
}
