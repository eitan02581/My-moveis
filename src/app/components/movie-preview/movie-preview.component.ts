import { Component, OnInit, Input } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/store/redux';
import {
  SET_SELECTED_MOVIE, SET_POPUP_TYPE,
} from '../../store/actions'
import Movie from 'src/app/models/movie';
@Component({
  selector: 'app-movie-preview',
  templateUrl: './movie-preview.component.html',
  styleUrls: ['./movie-preview.component.scss']
})
export class MoviePreviewComponent implements OnInit {

  constructor( private ngRedux: NgRedux<IAppState>) { }
  @Input() movie: Movie
  ngOnInit() {
  }

  onMovie(type: string) {
    this.ngRedux.dispatch({ type: SET_POPUP_TYPE, popupType: type })
    this.ngRedux.dispatch({ type: SET_SELECTED_MOVIE, payload: this.movie })

  }
  onSetMovieToDelete() {
    this.ngRedux.dispatch({ type: SET_SELECTED_MOVIE, payload: this.movie })
  }
}
