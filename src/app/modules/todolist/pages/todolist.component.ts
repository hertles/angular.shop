import {AfterViewInit, Component, ElementRef, OnDestroy, TrackByFunction, ViewChild} from '@angular/core';
import {TodoModel} from "@models/todo.model";
import {TodoService} from "@services/todo/todo.service";
import {debounceTime, fromEvent, Observable, Subscription, switchMap, tap} from "rxjs";

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements AfterViewInit, OnDestroy {
  @ViewChild('limitInput') limitInput: ElementRef<HTMLInputElement>
  public limit: number = 20
  public todos: TodoModel[]
  private subscriptions: Subscription[] = [];
  constructor(private todoService: TodoService) {
  }
  ngAfterViewInit() {
    this.subscriptions.push(
      this.getTodos(this.limit).subscribe((todos) => {
        this.todos = todos;
      })
    );
    this.subscriptions.push(
      fromEvent(this.limitInput.nativeElement, 'input').pipe(
        tap({
          next: () => {
            if (this.limit > 200) {
              this.limit = 200
            }
          }
        }),
        debounceTime(1000),
        switchMap(() => this.getTodos(this.limit))
      ).subscribe((todos) => {
        this.todos = todos;
      })
    )
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub=>sub.unsubscribe());
  }
  public trackByFieldName: TrackByFunction<TodoModel> = (_, item) => {
    return item.id
  }
  public trackByTodoId: TrackByFunction<TodoModel> = (_, item) => {
    return item.id
  }
  private getTodos(limit: number): Observable<TodoModel[]> {
    return this.todoService.getTodos(limit)
  }
}
