import { Injectable } from '@angular/core';
import {CookieService} from "./cookie.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookieService: CookieService) { }

  isLoggedIn() {
    return this.cookieService.getCookies('token').length > 0;

  }
  isAdmin() {
  }
}
