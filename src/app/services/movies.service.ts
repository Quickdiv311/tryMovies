import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient){}

  getMovies()
  {
    let headers = new HttpHeaders({
			'X-RapidAPI-Key': '230b0f5568msh9165af8c7f9a6dcp1e6008jsn39880cef66e8',
		  'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
		});

		return this.http.get<any>('https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20of%20thr', {
				headers: headers
			})
    .pipe(map((res: any) => {
      return res;
    }))
  }
}
