import { Injectable, signal } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toast = signal<any>(null);
  show(message: string, type = 'success') {
    this.toast.set({
      message,
      type
    });
    setTimeout(() => {
      this.toast.set(null);
    }, 3000);
  }

  success(message: string) {
    this.show(message, 'success');
  }
  error(message: string) {
    this.show(message, 'danger');
  }
  warning(message: string) {
    this.show(message, 'warning');
  }
  info(message: string) {
    this.show(message, 'info');
  }
}