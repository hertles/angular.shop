import {AfterViewInit, Component, ElementRef, OnDestroy, TrackByFunction, ViewChild} from '@angular/core';
import {Todo} from "@models/todo";
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
  public todos: Todo[]
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
