import { Component, computed, input, output, signal } from '@angular/core';
import { Todo } from '../models/todo-model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  imports: [FormsModule, CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
  standalone: true,
})
export class TodoItemComponent {
  todo = input.required<Todo>();
  doneItem = output<number>();
  deleteItem = output<number>();
  updateItem = output<{ id: number; text: string }>();
  readonly isDone = computed(() => this.todo().done);

  isEditing = signal(false);
  editedText = signal('');

  toggleDone() {
    this.doneItem.emit(this.todo().id);
  }

  delete() {
    this.deleteItem.emit(this.todo().id);
  }

  startEditing() {
    this.editedText.set(this.todo().text);
    this.isEditing.set(true);
  }

  saveEdit() {
    this.updateItem.emit({ id: this.todo().id, text: this.editedText() });
    this.isEditing.set(false);
  }
}
