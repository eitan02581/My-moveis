import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  popupTypeSub = new Subject<string>()
  selectedMovieSub = new Subject<object>()
  moviesSub = new Subject<Array<object>>()
  selectedMovie: any
  movies: Array<any>
  fullDetailedMovies: Array<any> = []

  getMoviesSub() {
    this.getMovies()
    return this.moviesSub
  }

  getMovies() {
    this.http.get<any>('http://www.omdbapi.com/?s=spider&apikey=97c3c387')
      .subscribe(movies => {
        this.movies = movies.Search;
        this.getFullMovieInfo()
      })
  }

  getFullMovieInfo() {
    this.movies.forEach((movie, index) => {
      this.http.get(`http://www.omdbapi.com/?i=${movie.imdbID}&apikey=97c3c387`)
        .subscribe(movie => {
          this.fullDetailedMovies.push(movie)
          // emits only after getting the last movie
          if (index === this.movies.length - 1) this.moviesSub.next(this.fullDetailedMovies)
        })
    })
  }

  deleteMovie() {
    this.fullDetailedMovies = this.fullDetailedMovies.filter(movie => movie.imdbID !== this.selectedMovie.imdbID)
    this.popupTypeSub.next(null)
    this.moviesSub.next(this.fullDetailedMovies)
  }

  addMovie(newMovie: any) {
    const isNew = this.fullDetailedMovies.every(movie => movie.Title !== newMovie.Title)
    if (!isNew) return false

    newMovie.imdbID = this._makeId()
    this.fullDetailedMovies.push(newMovie)
    this.moviesSub.next(this.fullDetailedMovies)
    return true
  }

  updateMovie(updatedMovie: any) {
    const idx = this.fullDetailedMovies.findIndex(movie => movie.imdbID === updatedMovie.imdbID)
    if (idx !== -1) {
      this.fullDetailedMovies[idx] = updatedMovie
    }
  }

  getPopupTypeSub() {
    return this.popupTypeSub
  }
  setPopupType(type: string) {
    this.popupTypeSub.next(type)
  }

  setSelectedMovie(movie: object) {
    this.selectedMovie = movie
    this.selectedMovieSub.next(movie)
  }

  getSelectedMovieSub() {
    return this.selectedMovieSub
  }

  _makeId(length = 10) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
      txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
  }
}
