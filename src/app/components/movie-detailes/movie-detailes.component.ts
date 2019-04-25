import { Component, OnInit, Input } from '@angular/core';
import { SET_POPUP_TYPE } from 'src/app/store/actions';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/store/redux';
import Movie from 'src/app/models/movie';

// import { removeSpecialChar } from '../../pipes/removeSpecialChar.pipe'
@Component({
  selector: 'app-movie-detailes',
  templateUrl: './movie-detailes.component.html',
  styleUrls: ['./movie-detailes.component.scss'],
})
export class MovieDetailesComponent implements OnInit {

  constructor( private ngRedux: NgRedux<IAppState>) { }
  @Input() popupTypeToShow: string
  @Input() movie: Movie
  // removeSpecialChar: removeSpecialChar
  ngOnInit() {
    console.log(this.movie);


  }

  onChangePopupType(type: string) {
    this.ngRedux.dispatch({ type: SET_POPUP_TYPE, popupType: type })
  }
}
