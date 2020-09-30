import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IMovie} from '../../../models/movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: 'movie.component.html',
  styleUrls: ['movie.component.scss']
})
export class MovieComponent {
  @Input() movie: IMovie;
  @Output() clicked: EventEmitter<number> = new EventEmitter<number>();

  clicks = 0;

  handleClick(): void {
    this.clicks++;
    this.clicked.emit(this.clicks);
  }
}
