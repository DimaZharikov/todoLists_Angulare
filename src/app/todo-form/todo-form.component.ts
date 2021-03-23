import { Component, OnInit } from '@angular/core';
import {TodosService, TodoType} from '../shared/todos.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
    values = '';
  constructor(private todosService: TodosService) { }
  addedTasks(): void {
    const newTodo: TodoType = {
      id: Date.now(),
      title: this.values,
      completed: false,
      date: new Date()
    };
    this.todosService.onAddedTodo(newTodo);
    this.values = '';
  }
  ngOnInit(): void {
  }

}
