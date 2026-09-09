import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private mockUser = {
    username: 'taikhoanmau',
    password: '120506',
    name: 'Nguyễn Công Kiên'
  };
  login(user: string, pass: string): boolean {
  if (user === this.mockUser.username && pass === this.mockUser.password) {
    localStorage.setItem('currentuser', JSON.stringify(this.mockUser));
    return true;
  }
  return false;
}
  isLoggedIn(): boolean {
    return localStorage.getItem('currentUser') !== null;
  }
  logout(): void {
    localStorage.removeItem('currentUser');
  }
}