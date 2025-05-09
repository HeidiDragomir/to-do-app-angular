import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodosService } from '../todos.service.js';

@Component({
  selector: 'app-new-todo-form',
  imports: [FormsModule],
  templateUrl: './new-todo-form.component.html',
  styleUrl: './new-todo-form.component.css',
})
export class NewTodoFormComponent {
  todosService = inject(TodosService);

  newTodoInput = '';

  onSubmit() {
    console.log('Form submit', this.newTodoInput);
    this.todosService.addNewTodo(this.newTodoInput);
    this.newTodoInput = '';
  }
}
