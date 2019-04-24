import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  onAddMovie(){
    this.movieService.setPopupType('add')
  }

}
