import {Injectable} from '@angular/core';
import {User} from "@models/user";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    {
      id: 1,
      login: '111',
      password: '111',
      name: 'Marik',
      homeTown: 'St Petersburg',
      postIndex: 191186,
      preferences: new Set([8, 9, 10, 20])
    },
    {
      id: 2,
      login: '222',
      password: '222',
      name: 'Kristina',
      homeTown: 'Lysva',
      postIndex: 618900,
      preferences: new Set([1, 16, 17])
    },
    {
      id: 3,
      login: '333',
      password: '333',
      name: 'Sasha',
      homeTown: 'Perm',
      postIndex: 614088,
      preferences: new Set([9, 16])
    },
    {
      id: 4,
      login: '444',
      password: '444',
      name: 'Nastya',
      homeTown: 'Gorodki',
      postIndex: 618220,
      preferences: new Set([15, 19])
    }
  ]
  private currentUserId: number | null = 1
  private currentUserSubject: BehaviorSubject<User | undefined> = new BehaviorSubject<User | undefined>(undefined)

  constructor() {
    this.currentUserSubject.next(this.users.find(user => user.id === this.currentUserId))
  }

  public getCurrentUser(): Observable<User | undefined> {
    return this.currentUserSubject
  }

  public getUsers() {
    return this.users
  }

  public login(login: string, password: string): boolean {
    const user = this.getUsers().find(user => user.login === login)
    if (user?.password === password) {
      this.setCurrentUser(user.id)
      return true
    }
    return false
  }

  public logout() {
    this.setCurrentUser(null)
  }

  private setCurrentUser(id: number | null): void {
    this.currentUserId = id
    this.currentUserSubject.next(this.users.find(user => user.id === this.currentUserId))
  }

  public togglePreference(id: number): void {
    const currentUser = this.currentUserSubject.getValue()
    if (currentUser) {
      currentUser.preferences.has(id)
        ? currentUser.preferences.delete(id)
        : currentUser.preferences.add(id)
      this.currentUserSubject.next(currentUser)
    }
  }
}
