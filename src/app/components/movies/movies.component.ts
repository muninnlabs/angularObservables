import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie, MoviesResponse } from 'src/app/interfaces/movies';
import { MovieService } from 'src/app/services/movie.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy {
  movies: Movie[];
  sub: Subscription;
  movieDetailsUrl: string = 'movie-details/';

  constructor(private movieService: MovieService){}
  movies$ = this.movieService.movies$
  
  ngOnInit(): void {
    this.sub = this.movieService.getMovies().subscribe(
      movies => this.movies = movies.results
    )
    
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  
}
