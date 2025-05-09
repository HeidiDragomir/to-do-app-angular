import { Component, inject, signal } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component.js';
import { todos } from '../todos';
import { TodosService } from '../todos.service.js';

@Component({
  selector: 'app-todo-list',
  imports: [TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  todoService = inject(TodosService);

  todos = this.todoService.getAllTodos();

  toggleTodoDone(id: number) {
    this.todoService.completeTodo(id);
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id);
  }

  updateTodo(data: { id: number; text: string }) {
    this.todoService.updateTodoText(data.id, data.text);
  }
}
