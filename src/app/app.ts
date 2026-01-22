import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Home } from './home/home';
import { TodosComponent } from "./components/todos/todos";
import { Adder } from './components/adder/adder';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, TodosComponent, Adder],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('first-app');
}
