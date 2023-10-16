import {Injectable} from '@angular/core';
import {User} from "../../core/modules/user";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    {
      id: 1,
      name: 'Marik',
      preferences: new Set([8, 9, 10, 20])
    },
    {
      id: 2,
      name: 'Kristina',
      preferences: new Set([1, 16, 17])
    },
    {
      id: 3,
      name: 'Sasha',
      preferences: new Set([9, 16])
    },
    {
      id: 4,
      name: 'Nastya',
      preferences: new Set([15, 19])
    }
  ]
  private currentUserId: number = 1
  private currentUserSubject: BehaviorSubject<User | undefined> = new BehaviorSubject<User | undefined>(undefined)

  constructor() {
    this.currentUserSubject.next(this.users.find(user => user.id === this.currentUserId))
  }

  getUsers() {
    return this.users
  }

  getCurrentUser(): Observable<User | undefined> {
    return this.currentUserSubject
  }

  togglePreference(id: number): void {
    const currentUser = this.currentUserSubject.getValue()
    if (currentUser) {
      currentUser.preferences.has(id)
        ? currentUser.preferences.delete(id)
        : currentUser.preferences.add(id)
      this.currentUserSubject.next(currentUser)
    }
  }
}
