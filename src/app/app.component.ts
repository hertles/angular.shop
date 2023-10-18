import {Component, OnDestroy, OnInit, TrackByFunction} from '@angular/core';
import {UserService} from "./core/services/user/user.service";
import {User} from "./core/models/user";
import {Observable, tap} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private interval: ReturnType<typeof setInterval>
  public inputs = ["", ""]
  public output = ""
  public date: Date = new Date()
  public currentUser$: Observable<User | undefined>
  public userLoading = true
  public navIsVisible = false

  constructor(private userService: UserService) {
  }
  ngOnInit() {
    this.currentUser$ = this.userService.getCurrentUser().pipe(
      tap(()=>{
        this.userLoading = false
      })
    )
    this.interval = setInterval(() => {
      this.date = new Date()
    }, 1000)
  }

  ngOnDestroy() {
    clearInterval(this.interval)
  }

  clearInput = () => {
    this.inputs = ["", ""]
    this.output = ""
  }
  inputTyped = (newInput: string) => {
    if (newInput === "123") {
      this.output = " правильно!!"
    } else {
      this.output = ""
    }
  }
  inputChanged = (event: Event) => {
    if (event.target) {
      const target = event.target as HTMLInputElement
      if (target.value === "123") {
        this.output = " сохранено!!!!"
      }
    }
  }
  trackByInputs: TrackByFunction<string> = (index, _) => index
  public setNavIsVisible() {
    this.navIsVisible = !this.navIsVisible
  }
}
