import { Component } from '@angular/core';
 import { RegisterForm } from './register/register.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RegisterForm],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {
  protected title = 'my-app';
}
