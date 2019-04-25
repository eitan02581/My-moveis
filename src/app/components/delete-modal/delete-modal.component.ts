import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/store/redux';
import {
  DELETE_MOVIE,
} from '../../store/actions'

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent implements OnInit {

  constructor( private ngRedux: NgRedux<IAppState>) { }
  ngOnInit() {

  }
  onDelete() {
    this.ngRedux.dispatch({ type: DELETE_MOVIE, })
  }
}
