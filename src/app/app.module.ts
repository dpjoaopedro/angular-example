import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { CommentComponent } from './components/comments/comments.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { UIModule } from './shared/ui/ui.module';
import { postReducer } from './reducers/post.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from './effects/post.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
import { commentReducer } from './reducers/comment.reducer';
import { CommentEffects } from './effects/comment.effects';
@NgModule({
  declarations: [AppComponent, PostComponent, CommentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    UIModule,
    StoreModule.forRoot({
      postState: postReducer,
      commentState: commentReducer,
    }),
    EffectsModule.forRoot([PostEffects, CommentEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
