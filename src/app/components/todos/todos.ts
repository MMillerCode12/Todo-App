import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoService } from '../../services/todos';
import { Todo } from '../../model/todo.type';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
})
export class TodosComponent implements OnInit {
  todoService = inject(TodoService);
  todoList= signal<Array<Todo>>([]);

  ngOnInit(): void {
    console.log("swag");
    this.todoList.set(this.todoService.todoItems);
  }
  
  deleteTodo(id: number): void {
    this.todoService.todoItems = this.todoService.todoItems.filter(todo => todo.id !== id);
    this.todoList.set(this.todoService.todoItems);
  }
  
}
