import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component.js';
import { TodoListComponent } from './todo-list/todo-list.component.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, TodoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todo-app-angular';
}
