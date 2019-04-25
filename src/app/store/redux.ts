import {
  ADD_MOVIE,
  DELETE_MOVIE,
  UPDATE_MOVIE,
  SET_POPUP_TYPE,
  SET_SELECTED_MOVIE
} from './actions'
import Movie from '../models/movie';

export interface IAppState {
  movies: Array<Movie>,
  movie: Movie,
  isNewTitle: boolean,
  popupType: string
}

export const INITIAL_STATE = {
  movies: [],
  movie: null,
  isNewTitle: true,
  popupType: null
}


export function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {

    case DELETE_MOVIE: {
      state = {
        ...state, popupType: null, movies: state.movies.filter(movie => movie.imdbID !== state.movie.imdbID)
      }
      break;
    }

    case ADD_MOVIE: {
      // if new movie added
      if (action.newMovie) {
        const isNewTitle = state.movies.every(movie => movie.Title !== action.newMovie.Title)
        // if title is taken  => not able to add
        if (!isNewTitle) {
          state = { ...state, isNewTitle: false }
          break;
        }
        state = { ...state, movies: [...state.movies, action.newMovie], isNewTitle: true }
      }
      // if got movies from api
      else if (action.movies) state = { ...state, movies: [...action.movies] }
      break;
    }

    case UPDATE_MOVIE: {
      let isTaken: boolean
      state.movies.forEach(movie => {
        if (movie.Title === action.updatedMovie.Title && movie.imdbID !== action.updatedMovie.imdbID) isTaken = true
      })
      // if title is taken  => not able to add
      if (isTaken) {
        state = { ...state, isNewTitle: false }
        break;
      }

      const idx = state.movies.findIndex(movie => movie.imdbID === action.updatedMovie.imdbID)
      if (idx !== -1) {
        const movies = [...state.movies]
        movies[idx] = action.updatedMovie
        state = { ...state, movies, isNewTitle: true }
      }
      break;
    }

    case SET_SELECTED_MOVIE: {
      state = { ...state, movie: action.payload }
      break;
    }

    case SET_POPUP_TYPE: {
      state = { ...state, popupType: action.popupType }
    }
  }

  return state
}





