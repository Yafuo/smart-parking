import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CookieService {
  constructor() {
  }

  getCookies(key: string): string {
    const cookieKV = document.cookie.split(';').filter(pair => pair.indexOf(key) >= 0)[0]; // cookieKV <=> Cookie Key-Value pair
    return cookieKV ? cookieKV.slice(cookieKV.indexOf('=') + 1) : '';
  }

  deleteCookie(key: string) {
    document.cookie = key + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/';
  }
}
