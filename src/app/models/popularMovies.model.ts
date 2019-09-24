import { Injectable } from '@angular/core';
import { PopMovie } from '../adapters/popMovie';

export class PopularMovieModel {
  constructor(
    public id: number,
    // tslint:disable-next-line: variable-name
    public media_type: string,
    // tslint:disable-next-line: variable-name
    public original_language: string,
    // tslint:disable-next-line: variable-name
    public original_title: string,
    public popularity: number,
    // tslint:disable-next-line: variable-name
    public poster_path: string,
    // tslint:disable-next-line: variable-name
    public release_date: string,
    public title: string,
    // tslint:disable-next-line: variable-name
    public vote_average: number,
    // tslint:disable-next-line: variable-name
    public vote_count: number,
    // tslint:disable-next-line: variable-name
    public original_name: string,
    // tslint:disable-next-line: variable-name
    public first_air_date: string
  ) {}
}
@Injectable({ providedIn: 'root' })
export class PopularMovieAdapter implements PopMovie<PopularMovieModel> {
  adapt(movie: any): PopularMovieModel {
    return new PopularMovieModel(
      movie.id,
      movie.media_type,
      movie.original_language,
      movie.original_title,
      movie.popularity,
      movie.poster_path,
      movie.release_date,
      movie.title,
      movie.vote_average,
      movie.vote_count,
      movie.original_name,
      movie.first_air_date
    );
  }
}
