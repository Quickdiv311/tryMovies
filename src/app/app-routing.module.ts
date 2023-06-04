import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { CinemasComponent } from './components/cinemas/cinemas.component';

const routes: Routes = [
  {path: '',redirectTo: 'movies',pathMatch: 'full'},
  {path: 'movies', component: MoviesComponent},
  {path: 'cinemas/:name', component: CinemasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
