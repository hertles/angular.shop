import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Observable, tap} from "rxjs";
import {User} from "../../core/models/user";
import {UserService} from "../../core/services/user/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() toggleNavBar: EventEmitter<null> = new EventEmitter<null>()
  public currentUser$: Observable<User | undefined>
  public date: Date = new Date()
  public userLoading = true
  private interval: ReturnType<typeof setInterval>
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

  public onBurgerClick() {
    this.toggleNavBar.emit()
  }
}
