import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Genre } from '../../models/genre';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  genres: Genre[] = [];
  
  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
    this.movieService.getMoviesGenres().subscribe(genresData => this.genres = genresData);
  }

}
