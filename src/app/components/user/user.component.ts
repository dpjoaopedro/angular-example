import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import * as fromPosts from '../../selectors/post.selectors';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  user$: Observable<User | null>;
  posts$ = this.store.select(fromPosts.selectFromUser(1));

  constructor(private userService: UserService, private store: Store) {
    this.user$ = this.userService.getUser('1');
  }
}
