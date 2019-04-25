import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MoviePreviewComponent } from './components/movie-preview/movie-preview.component';
import { HeaderComponent } from './components/header/header.component';
import { MovieDetailesComponent } from './components/movie-detailes/movie-detailes.component';
import { EditMovieComponent } from './components/edit-movie/edit-movie.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';
import { removeSpecialChar } from './pipes/removeSpecialChar.pipe';
import { NgRedux, NgReduxModule } from '@angular-redux/store'
import { rootReducer, INITIAL_STATE, IAppState } from './store/redux';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MoviesListComponent,
    MoviePreviewComponent,
    HeaderComponent,
    MovieDetailesComponent,
    EditMovieComponent,
    DeleteModalComponent,
    removeSpecialChar
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgReduxModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE)
  }
}
