import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-preview',
  templateUrl: './movie-preview.component.html',
  styleUrls: ['./movie-preview.component.scss']
})
export class MoviePreviewComponent implements OnInit {

  constructor(private movieService: MovieService) { }
  @Input() movie: any
  ngOnInit() {
  }

  onMovie(type: string) {
    this.movieService.setPopupType(type)
    this.movieService.setSelectedMovie(this.movie)
  }
  onDelete() {
    this.movieService.setSelectedMovie(this.movie)
  }
}
