import {Component, OnInit, TrackByFunction} from '@angular/core';
import {Todo} from "../../core/models/todo";
import {TodoService} from "../../core/services/todo/todo.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-todolist-page',
  templateUrl: './todolist-page.component.html',
  styleUrls: ['./todolist-page.component.scss']
})
export class TodolistPageComponent implements OnInit {
  public limit: number = 20
  public todos: Observable<Todo[]>
  constructor(private todoService: TodoService) {
  }
  ngOnInit() {
    this.todos = this.getTodos(this.limit)
  }
  public onBlur() {
    this.todos = this.getTodos(this.limit)
  }
  public trackByFieldName: TrackByFunction<Todo> = (_,item) => {
    return item.id
  }
  public trackByTodoId: TrackByFunction<Todo> = (_,item) => {
    return item.id
  }
  private getTodos(limit: number): Observable<Todo[]> {
    return this.todoService.getTodos(limit)
  }
}
