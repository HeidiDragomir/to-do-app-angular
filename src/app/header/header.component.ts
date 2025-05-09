import { Component } from '@angular/core';
// import { DailyTodoComponent } from '../daily-todo/daily-todo.component.js';
import { NewTodoFormComponent } from '../new-todo-form/new-todo-form.component.js';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NewTodoFormComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
