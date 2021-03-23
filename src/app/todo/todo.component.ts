import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {TodosService, TodoType} from '../shared/todos.service';
import {delay} from 'rxjs/operators';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  loading = true;
  delayOperator = 1000;
  searchString = '';

  constructor(public todosService: TodosService) {
  }

  ngOnInit(): void {
    this.todosService.fetchTodos()
      .pipe(delay(this.delayOperator))
      .subscribe(() => {
        this.loading = false;
      });
  }

  onChangeIsToggle(id: number): void {
    // this.onToggle.emit(id);
    this.todosService.onToggle(id);
  }

  onRemoveTodoHandler(id: number): void {
    this.todosService.onRemove(id);
  }

}
