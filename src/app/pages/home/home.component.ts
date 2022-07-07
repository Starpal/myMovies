import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	// define a constant with the movies service response
	movies: any = [];

	constructor(private moviesService: MoviesService) { }

	// manages the lifecycle of component
	// the .subscribe() mean I'm waiting for the data to come from the api/server
	ngOnInit(): void {
		this.moviesService.getMovies().subscribe((response: any) => {
			this.movies = response.results;
			console.log(this.movies)
		});
	}

}
