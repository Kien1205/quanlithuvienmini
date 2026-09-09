import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../dichvu/quanlidangnhap'; 

@Component({
  selector: 'app-dangnhap',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './componentdangnhap.html',
  
})
export class DangnhapComponent {
  username: string = '';
  password: any = '';
constructor(private authService: AuthService, private router: Router) {}
  onLogin() {
    const success = this.authService.login(this.username, this.password);
    if (success) {
      alert('Đăng nhập thành công!');
    } else {
      alert('Sai tên đăng nhập hoặc mật khẩu!');
    }
  }
}