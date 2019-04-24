import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

// import { removeSpecialChar } from '../../pipes/removeSpecialChar.pipe'
@Component({
  selector: 'app-movie-detailes',
  templateUrl: './movie-detailes.component.html',
  styleUrls: ['./movie-detailes.component.scss'],
})
export class MovieDetailesComponent implements OnInit {

  constructor(private movieService: MovieService) { }
  @Input() popupTypeToShow: string
  @Input() movie: any
  // removeSpecialChar: removeSpecialChar
  ngOnInit() {


  }

  onChangePopupType(type: string) {
    this.movieService.setPopupType(type)
  }
}
