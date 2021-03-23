import {Pipe, PipeTransform} from '@angular/core';
import {TodoType} from './todos.service';

@Pipe({
  name: 'todosFilter'
})
export class TodosFilterPipe implements PipeTransform{
  transform(todos: TodoType[], search: string = ''): TodoType[] {
    if (!search.trim()){
      return todos;
    }
    return todos.filter(item => {
      return item.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
  }

}
