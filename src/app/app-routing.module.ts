import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { MovieComponent } from './pages/movie/movie.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'movies',
        component: MoviesComponent,
    },
    {
        path: 'movie/:id',
        component: MovieComponent,
    },
    {
        //path to redirect to home page in case of random path. Always at the end of routes.
        path: '**',
        redirectTo: '',
    },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
