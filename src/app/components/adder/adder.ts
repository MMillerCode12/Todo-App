import { Component, inject } from '@angular/core';
import { TodoService } from '../../services/todos';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adder',
  imports: [FormsModule],
  templateUrl: './adder.html',
  styleUrl: './adder.scss',
})
export class Adder {
  todoService = inject(TodoService);
  newTask: string = '';

  addTask(): void {

    if (this.newTask.trim().length !== 0) {
      this.todoService.addTodo(this.newTask);
    }

    this.newTask = '';
  }
}
