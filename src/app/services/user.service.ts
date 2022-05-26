import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users = new BehaviorSubject<User | null>(null);
  users$ = this.users.asObservable();

  constructor(private http: HttpClient) {}

  getUser(id: string) {
    if (!this.users.value) {
      return this.http
        .get<User>('https://jsonplaceholder.typicode.com/users/' + id)
        .pipe(tap((users) => this.users.next(users)));
    }
    return this.users$;
  }
}
