import { Injectable } from '@angular/core';
import {User} from "../../core/modules/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    {
      id: 1,
      name: 'Marik',
      preferences: new Set([8,9,10,20])
    },
    {
      id: 2,
      name: 'Kristina',
      preferences: new Set([19,20,59,69,70])
    },
    {
      id: 3,
      name: 'Sasha',
      preferences: new Set([16,22,27])
    },
    {
      id: 4,
      name: 'Nastya',
      preferences: new Set([19,58])
    }
  ]
  private currentUserId: number = 1
  getUsers() {
    return this.users
  }
  getCurrentUser() {
    return this.users.find(user => user.id === this.currentUserId)
  }
  getMyPreferences(): Set<number>{
    return this.getCurrentUser()?.preferences ?? new Set()
  }
  togglePreference(id: number){
    const preferences = this.getMyPreferences()
    preferences.has(id) ? preferences.delete(id) : preferences.add(id)
  }
  constructor() { }
}
