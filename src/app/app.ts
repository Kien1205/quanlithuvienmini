import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DangnhapComponent } from './components/dangnhap/componentdangnhap';
@Component({
  standalone: true,
  imports: [DangnhapComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('thuctap');
}
