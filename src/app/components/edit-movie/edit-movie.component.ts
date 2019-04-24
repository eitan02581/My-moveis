import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss']
})
export class EditMovieComponent implements OnInit {

  constructor(private movieService: MovieService) { }
  @Input() popupTypeToShow: string
  @Input() movie: any
  isTitleTaken: boolean = false
  form: FormGroup;

  ngOnInit() {
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
  onChangePopupType(type: string) {
    this.movieService.setPopupType(type)
  }

  onSaveMovie() {
    if (this.form.invalid) {
      return;
    }

    const movie = { ...this.form.value }

    if (this.popupTypeToShow === "add") {
      const isNew = this.movieService.addMovie(movie)

      if (!isNew) {
        this.isTitleTaken = true
        return
      }
      this.form.reset();

    } else {
      // save the actual id
      movie.imdbID = this.movie.imdbID
      this.movieService.updateMovie(movie)
    }
    this.movieService.setPopupType(null)
  }
}
