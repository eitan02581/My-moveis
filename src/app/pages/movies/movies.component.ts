import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { select } from '@angular-redux/store';
import Movie from 'src/app/models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy {

  constructor(private movieService: MovieService) { }
  @select() movies$
  @select() movie$
  @select() popupType$

  movies: Array<Movie>
  popupTypeToShow: string = null
  movie: Movie

  ngOnInit() {

    // get movies from apio
    this.movieService.getMovies()
    // listen to movies from store
    this.movies$.subscribe(movies => this.movies = movies);
    this.movie$.subscribe(movie => this.movie = movie);
    // this.movieService.getPopupTypeSub().subscribe(type => this.popupTypeToShow = type)
    this.popupType$.subscribe(popupType => this.popupTypeToShow = popupType)
  }

  onExitPopup() {
    this.popupTypeToShow = null
  }
  ngOnDestroy() {
    this.movies$.unsubscribe();
  }
}
