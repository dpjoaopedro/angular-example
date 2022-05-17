import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentComponent } from './components/comments/comments.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
  { path: 'posts', component: PostComponent },
  { path: 'comments', component: CommentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
