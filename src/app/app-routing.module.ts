import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/welcome/welcome.component').then(m => m.WelcomeComponent)
  },{
    path: 'movies',
    loadComponent: () =>
      import('./components/movies/movies.component').then(m => m.MoviesComponent)
  },
  {
    path: 'movie-details/:id',
    loadComponent: () =>
      import('./components/movie-details/movie-details.component').then(m => m.MovieDetailsComponent)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
