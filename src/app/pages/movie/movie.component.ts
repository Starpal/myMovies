import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie, MovieCredits, MovieImages, MovieVideo } from 'src/app/models/movie';
import { IMAGES_SIZES } from '../../constants/images-sizes';
/** to destroy the subscribed service after we get only the first value. 
** Not needed for http client */
import { first } from 'rxjs'; 

@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit, OnDestroy {
    movie: Movie | null = null;
    movieVideos: MovieVideo[] = [];
    movieImages: MovieImages | null = null;
    movieCredits: MovieCredits | null = null;
    similarMovies: Movie[] = [];

    imagesSizes = IMAGES_SIZES;

    /*ActivatedRoute to read parameters passed to URL */
    constructor(private route: ActivatedRoute, private moviesService: MoviesService) {}

    ngOnInit(): void {
        this.route.params.pipe(first()).subscribe(({ id }) => {
            this.getMovie(id);
            this.getMovieVideos(id);
            this.getMovieImages(id);
            this.getMovieCredits(id);
            this.getMovieSimilar(id);
        });
    }

    ngOnDestroy() {
        console.log('component destroyed');
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

    getMovieCredits(id: string) {
        this.moviesService.getMovieCredits(id).subscribe((movieCreditsData) => {
            this.movieCredits = movieCreditsData;
            console.log(this.movieCredits);
        });
    }

    getMovieSimilar(id: string) {
        this.moviesService.getMovieSimilar(id).subscribe((movieSimilarData) => {
            this.similarMovies = movieSimilarData;
        });
    }
}
