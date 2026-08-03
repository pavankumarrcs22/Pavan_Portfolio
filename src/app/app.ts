import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { Toast } from './shared/toast/toast';
import { ToastService } from './shared/services/toast';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar,Footer,Toast],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
  constructor(private toast: ToastService) {
    setTimeout(() => {
      this.toast.success("Welcome!");
    }, 1000);
  }
}
