import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Form } from './components/form/form';
import { Lista } from './components/lista/lista';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [Header,Form,Lista],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
}
