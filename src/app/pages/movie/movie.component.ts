import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie, MovieImages, MovieVideo } from 'src/app/models/movie';
import { IMAGES_SIZES } from '../../constants/images-sizes';

@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
    movie: Movie | null = null;
    movieVideos: MovieVideo[] = [];
    movieImages: MovieImages | null = null;

    imagesSizes = IMAGES_SIZES;

    /*ActivatedRoute to read parameters passed to URL */
    constructor(private route: ActivatedRoute, private moviesService: MoviesService) {}

    ngOnInit(): void {
         this.route.params.pipe().subscribe(({ id }) => {
            this.getMovie(id);
             this.getMovieVideos(id);
             this.getMovieImages(id);
        });
    }

    getMovie(id: string) {
        this.moviesService.getMovie(id).subscribe((movieData) => {
            this.movie = movieData;
        });
    }

    getMovieVideos(id: string) {
        this.moviesService.getMovieVideos(id).subscribe((movieVideoData) => {
			this.movieVideos = movieVideoData;
			// console.log(this.movieVideos)
        });
    }

    getMovieImages(id: string) {
        this.moviesService.getMovieImages(id).subscribe((movieImagesData) => {
            this.movieImages = movieImagesData;
        });
    }
}
