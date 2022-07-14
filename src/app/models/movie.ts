export interface Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: false;
    vote_average: number;
    vote_count: number;
    revenue: number;
    runtime: number;
    status: string;
    genres: Genre[];
}

export interface Genre {
    id: number;
    name: string;
}

export interface MovieDto {
    page: number;
    results: Movie[];
    total_results: string;
    total_pages: string;
}

export interface MovieVideoDto {
    id: number;
    results: MovieVideo[];
}

export interface MovieVideo {
    site: string;
    key: string;
}
// ther way to create model interface without break it down in dto
export interface MovieImages {
    backdrops: {
        file_path: string;
    }[];
}
