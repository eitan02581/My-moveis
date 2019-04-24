import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent implements OnInit {

  constructor(private movieService:MovieService) { }
  ngOnInit() {

  }
onDelete(){
  this.movieService.deleteMovie()
}
}
