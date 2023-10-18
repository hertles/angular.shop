import {Component, OnInit, TrackByFunction} from '@angular/core';
import {Todo} from "../../models/todo";
import {TodoService} from "../../services/todo/todo.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-todolist-page',
  templateUrl: './todolist-page.component.html'
})
export class TodolistPageComponent implements OnInit {
  public limit: number = 20
  public todos: Observable<Todo[]>
  constructor(private todoService: TodoService) {
  }
  ngOnInit() {
    this.todos = this.todoService.getTodos(this.limit)
  }
  public trackByTodoId: TrackByFunction<Todo> = (_,item) => {
    return item.id
  }
  public trackByFieldName: TrackByFunction<Todo> = (_,item) => {
    return item.id
  }
}
