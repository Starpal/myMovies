import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    // define a constant with the movies service response
    popularMovies: Movie[] = [];
    upcomingMovies: Movie[] = [];
    topRatedMovies: Movie[] = [];
    constructor(private moviesService: MoviesService) {}

    // manages the lifecycle of component
    // the .subscribe() mean I'm waiting for the data to come from the api/server
    ngOnInit(): void {
        this.moviesService.getMovies('popular').subscribe((movies) => {
            this.popularMovies = movies;
            //console.log(this.popularMovies);
        });
        this.moviesService.getMovies('top_rated').subscribe((movies) => {
            this.topRatedMovies = movies;
            //console.log(this.popularMovies);
        });
        this.moviesService.getMovies('upcoming').subscribe((movies) => {
            this.upcomingMovies = movies;
        });
    }
}
