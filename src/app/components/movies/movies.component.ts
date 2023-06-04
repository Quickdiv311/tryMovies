import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  public movieList: any;

  constructor(private movies: MoviesService){
       this.movies.getMovies().subscribe(res => {
        res.d.splice(3,1);
        res.d.splice(4,1);
        this.movieList = res.d;
       })
  }
}
