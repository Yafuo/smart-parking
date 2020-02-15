import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn() {
    return this.getCookies('token').length > 0;

  }
  isAdmin() {
  }

  getCookies(value: string): string {
    const cookieKV = document.cookie.split(';').filter(pair => pair.indexOf(value) >= 0)[0]; // cookieKV <=> Cookie Key-Value pair
    return cookieKV ? cookieKV.slice(cookieKV.indexOf('=') + 1) : '';
  }
}
