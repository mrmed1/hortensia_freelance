import {Injectable} from '@angular/core';

const TOKEN_KEY = 'auth-token';
const OTP_TOKEN = 'otp_token';

@Injectable({
  providedIn: 'root'
})
export class TokenstorageService {

  constructor() {
  }

  signOut(): void {
    window.localStorage.clear();
  }


  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  }

  getOTPToken() {
    return localStorage.getItem(OTP_TOKEN);
  }
  remove() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(OTP_TOKEN);

  }

  decode(payload) {
    return JSON.parse(atob(payload));
  }

  payload(token) {
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  tokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }

  saveOtpToken(token) {
    localStorage.setItem(OTP_TOKEN, token)
  }

}
