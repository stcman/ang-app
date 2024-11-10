import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' //this option makes it available in any component
})
export class TodosService {
  http = inject(HttpClient);

  getTodosFromApi() {
    const url = `https://jsonplaceholder.typicode.com/todos`;
    return this.http.get<Todo[]>(url);
  }
}
