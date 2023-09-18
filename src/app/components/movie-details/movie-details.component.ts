import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/interfaces/movies';
import { Subscription } from 'rxjs';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule, CardModule],
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService) { }
    sub: Subscription;
  id: any
  movieDetail: Movie;
  movieDetails$ = this.movieService.movieDetails$

  ngOnInit():void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.sub = this.movieService.getMovieDetails(this.id).subscribe(
      movies => {
        this.movieDetail = movies
      }
    )
    this.movieService.selectedMovieDetailId(this.id)
    console.log(this.movieDetail);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }





}
