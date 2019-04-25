import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {  forkJoin } from 'rxjs';
// store
import { NgRedux, select } from '@angular-redux/store'
import {
  ADD_MOVIE,
} from '../store/actions'
import { IAppState } from '../store/redux';
import Movie from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient, private ngRedux: NgRedux<IAppState>) { }

  movies: Array<Movie>
  fullDetailedMovies: Array<Movie> = []
  @select() movie$


  getMovies() {
    this.http.get<any>('https://www.omdbapi.com/?s=spider&apikey=97c3c387')
      .subscribe(movies => {
        this.movies = movies.Search;
        this.getFullMovieInfo()
      })
  }

  getFullMovieInfo() {
    let movies$ = forkJoin(
      this.movies.map((movie, index) =>
        this.http.get<any>(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=97c3c387`)
      ))
    movies$.subscribe(movies => this.ngRedux.dispatch({ type: ADD_MOVIE, movies }))
  }



}
