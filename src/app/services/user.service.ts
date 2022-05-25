import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  ReplaySubject,
  share,
  Subject,
} from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users$ = this.http
    .get<User[]>('https://jsonplaceholder.typicode.com/users')
    .pipe(
      share({
        connector: () => new ReplaySubject(1),
        resetOnComplete: () => this.shouldGetUsers,
      })
    );

  shouldGetUsers = new Subject<boolean>();

  constructor(private http: HttpClient) {}
}
