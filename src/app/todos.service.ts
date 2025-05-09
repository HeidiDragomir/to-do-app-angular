import { computed, Injectable, signal } from '@angular/core';
import { todos } from './todos';
import { Todo } from './models/todo-model.js';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos = signal(todos);

  filteredTodos = computed(() => this.todos().filter((t) => !t.done));

  getAllTodos() {
    return this.filteredTodos;
  }

  addNewTodo(text: string) {
    const newTodo: Todo = {
      id: this.todos().length + 1,
      text: text,
      done: false,
    };

    const newTodos = [...this.todos(), newTodo];

    this.todos.set(newTodos);
  }

  completeTodo(id: number) {
    const newTodos = this.todos().map((t) =>
      t.id === id ? { ...t, done: !t.done } : t
    );

    this.todos.set(newTodos);
  }

  deleteTodo(id: number) {
    const newTodos = this.todos().filter((t) => t.id !== id);
    this.todos.set(newTodos);
  }

  updateTodoText(id: number, newText: string) {
    const newTodos = this.todos().map((t) =>
      t.id === id ? { ...t, text: newText } : t
    );
    this.todos.set(newTodos);
  }

  ddNewTodo(text: string) {
    const newTodo: Todo = {
      id: this.todos().length + 1,
      text: text,
      done: false,
    };

    const newTodos = [...this.todos(), newTodo];

    this.todos.set(newTodos);
  }
}
