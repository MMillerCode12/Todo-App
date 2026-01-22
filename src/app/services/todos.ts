import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';

@Injectable({
  providedIn: 'root',
})

export class TodoService {
  todoItems: Array<Todo> = []

  addTodo(todo_title: string): void {
    this.todoItems.push({
      id: this.todoItems.length + 1,
      title: todo_title.trim(),
      completed: false,
      userId: 0
    });
  }

  constructor() {}
}
