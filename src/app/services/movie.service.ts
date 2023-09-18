import { Injectable, inject } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
} from '@angular/common/http';
import { Movie, MoviesResponse } from '../interfaces/movies';
import {
  BehaviorSubject,
  catchError,
  filter,
  map,
  Observable,
  of,
  switchMap,
  throwError,
  tap,
  Subject
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  public filmsUrl = "https://swapi.py4e.com/api/films";
  http = inject(HttpClient);

  //create a behavior subject and transform it into a observable
  private movieSubject = new BehaviorSubject<string>('')
  movieSelectedAction$ = this.movieSubject.asObservable()

  //procedural functions
  getMovies(): Observable<MoviesResponse> {
    return this.http.get<MoviesResponse>(this.filmsUrl)
      .pipe(
        tap(data => console.log(data)),
        map(data => data),
        catchError(this.handleError)
      );
  }
  
  //declarative 
  movies$ = this.http.get<MoviesResponse>(this.filmsUrl)
    .pipe(
      tap(data => console.log(JSON.stringify(data))),
      map(data => data.results),
      catchError(this.handleError)
    );

  //procedural functions
  getMovieDetails(id: string): Observable<Movie> {
    return this.http.get<Movie>(`${this.filmsUrl}/${id}`)
      .pipe(
        tap(data => console.log('aaaaaaaa', data)),
        map(result => result),
        catchError(this.handleError)
      )
  }
  //declarative
  movieDetails$ = this.movieSelectedAction$.pipe(
    switchMap(id => this.http.get<Movie>(`${this.filmsUrl}/${id}`)
      .pipe(
        tap(data => console.log('bbbbbbbb', data)),
        catchError(this.handleError)
      ))
  )
  //update behaviour subject value so the observable will update the id
  selectedMovieDetailId(id: string): void {
    console.log(id)
    this.movieSubject.next(id);
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
