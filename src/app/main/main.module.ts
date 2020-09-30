import {NgModule} from '@angular/core';
import {MovieComponent} from './components/movie/movie.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    MovieComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MovieComponent
  ],
  providers: []
})
export class MainModule {}
