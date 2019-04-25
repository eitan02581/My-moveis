import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { NgRedux, select } from '@angular-redux/store'
import { ADD_MOVIE, UPDATE_MOVIE, SET_POPUP_TYPE } from '../../store/actions'
import { IAppState } from 'src/app/store/redux';
import { Observable } from 'rxjs';
import Movie from 'src/app/models/movie';
@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss']
})
export class EditMovieComponent implements OnInit {

  constructor( private ngRedux: NgRedux<IAppState>) { }
  @select() isNewTitle$: Observable<boolean>
  @Input() popupTypeToShow: string
  @Input() movie: Movie 
  isErrDisp: boolean = false
  isNewTitle: boolean
  form: FormGroup;

  ngOnInit() {
    // sub to title validation
    this.isNewTitle$.subscribe(isNewTitle => this.isNewTitle = isNewTitle)

    if (this.popupTypeToShow === 'add') this.movie = {}
    this.form = new FormGroup({
      Title: new FormControl(this.movie.Title, { validators: [Validators.required] }),
      Poster: new FormControl(this.movie.Poster, { validators: [Validators.required] }),
      Year: new FormControl(this.movie.Year, { validators: [Validators.required] }),
      Runtime: new FormControl(this.movie.Runtime, { validators: [Validators.required] }),
      Genre: new FormControl(this.movie.Genre, { validators: [Validators.required] }),
      Director: new FormControl(this.movie.Director, { validators: [Validators.required] }),
    })
  }
  onChangePopupType(popupType: string) {
    this.ngRedux.dispatch({ type: SET_POPUP_TYPE, popupType })
  }

  onSaveMovie() {
    if (this.form.invalid) {
      return;
    }

    const newMovie = { ...this.form.value }
    // add movie
    if (this.popupTypeToShow === "add") {
      newMovie.imdbID = this._makeId()
      this.ngRedux.dispatch({ type: ADD_MOVIE, newMovie })
    }
    // update movie
    else {
      // save the actual id
      newMovie.imdbID = this.movie.imdbID
      const updatedMovie = newMovie
      this.ngRedux.dispatch({ type: UPDATE_MOVIE, updatedMovie })
    }
    // if title is taken return
    if (!this.isNewTitle) {
      this.isErrDisp = true
      return
    }
    this.ngRedux.dispatch({ type: SET_POPUP_TYPE, popupType: null })
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
