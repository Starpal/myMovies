import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; /*service to get/post data from/to server*/

@Injectable({  /** I can use the sevice anywhere */
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getMovies() {
	return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=74fa2938e2222c8e6f12e75dd5349d71')
  }
}
