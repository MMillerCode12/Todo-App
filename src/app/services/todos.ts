import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';

@Injectable({
  providedIn: 'root',
})

export class TodoService {
  todoItems: Array<Todo> = [{
    title: 'groceries',
    id: 0,
    userId: 0,
    completed: false
  },
  {
    title: 'drink alcohol',
    id: 1,
    userId: 0,
    completed: false
  },
  {
    title: 'sip lean',
    id: 2,
    userId: 0,
    completed: false
  },
  {
    title: 'die',
    id: 3,
    userId: 0,
    completed: false
  }]

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
