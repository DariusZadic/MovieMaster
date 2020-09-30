import { Component } from '@angular/core';
import {IMovie} from './models/movie.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  repetitions: number;

  test: IMovie = {
    title: 'Avengers',
    year: 2012
  };

  handleClick(clicks: number): void {
    this.repetitions = clicks;
  }
}
