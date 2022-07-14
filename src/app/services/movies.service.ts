import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; /*service to get/post data from/to server*/
import { Movie, MovieDto, MovieImages, MovieVideoDto, MovieCredits } from '../models/movie';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
    /** I can use the sevice anywhere */
    providedIn: 'root',
})
export class MoviesService {
    baseUrl: string = 'https://api.themoviedb.org/3';
    apiKey: string = '74fa2938e2222c8e6f12e75dd5349d71';

    constructor(private http: HttpClient) {}

    getMovies(type: string = 'upcoming', count: number = 12) {
        return this.http.get<MovieDto>(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`).pipe(
            switchMap((res) => {
                return of(res.results.slice(0, count));
            })
        );
    }

    getMovie(id: string) {
        return this.http.get<Movie>(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`);
    }

    searchMovies(page: number) {
        return this.http.get<MovieDto>(`${this.baseUrl}/movie/popular?page=${page}&api_key=${this.apiKey}`).pipe(
            switchMap((res) => {
                return of(res.results);
            })
        );
    }

    getMovieVideos(id: string) {
        return this.http.get<MovieVideoDto>(`${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`).pipe(
            switchMap((res) => {
                return of(res.results);
            })
        );
    }

    getMovieImages(id: string) {
        return this.http.get<MovieImages>(`${this.baseUrl}/movie/${id}/images?api_key=${this.apiKey}`);
    }

    getMovieCredits(id: string) {
        return this.http.get<MovieCredits>(`${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`);
    }

    getMovieSimilar(id: string) {
        return this.http.get<MovieDto>(`${this.baseUrl}/movie/${id}/similar?api_key=${this.apiKey}`).pipe(
            switchMap((res) => {
                return of(res.results.slice(0, 12));
            })
        );
    }
}
