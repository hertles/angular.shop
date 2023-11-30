import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {debounceTime, Observable} from "rxjs";
import {TodoModel} from "@models/todo.model";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }
  getTodos(limit: number): Observable<TodoModel[]> {
    return this.http.get<TodoModel[]>('https://jsonplaceholder.typicode.com/todos', {
      params: {_limit: limit}
    }).pipe(debounceTime(1000))
  }
}
