import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  movies: Array<object>
  popupTypeToShow: string = null
  movie: object

  ngOnInit() {
    this.movieService.getMoviesSub().subscribe(movies => this.movies = movies)
    this.movieService.getPopupTypeSub().subscribe(type => this.popupTypeToShow = type)
    this.movieService.getSelectedMovieSub().subscribe(movie => this.movie = movie)
  }


  onExitPopup() {
    this.popupTypeToShow = null
  }
}
