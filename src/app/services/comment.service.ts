import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private http: HttpClient) {}
  getAll() {
    return this.http
      .get<Comment[]>('https://jsonplaceholder.typicode.com/comments')
      .pipe(delay(2000));
  }
}
