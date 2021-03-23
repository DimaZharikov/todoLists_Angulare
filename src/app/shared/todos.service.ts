import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

export interface TodoType {
  id: number;
  title: string;
  completed: boolean;
  date?: Date;
}

@Injectable({providedIn: 'root'})
export class TodosService {
  public todos: Array<TodoType> = [];

  constructor(private http: HttpClient) {
  }

  fetchTodos(): Observable<TodoType[]> {
    const limit = 5;
    return this.http.get<TodoType[]>(`http://jsonplaceholder.typicode.com/todos/?_limit=${limit}`)
      .pipe(tap(requestTodos => this.todos = requestTodos));
  }

  onToggle(id: number): void {
    const index = this.todos.findIndex(t => t.id === id);
    this.todos[index].completed = !this.todos[index].completed;
  }

  onRemove(id: number): void {
    this.todos = this.todos.filter(t => t.id !== id);
  }
  onAddedTodo(tasksValue: TodoType): void {
    this.todos.unshift(tasksValue);
  }

}
