import { Component, OnInit } from '@angular/core';
import { SET_POPUP_TYPE } from 'src/app/store/actions';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/store/redux';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

  onAddMovie() {
    this.ngRedux.dispatch({ type: SET_POPUP_TYPE, popupType: 'add' })
  }

}
