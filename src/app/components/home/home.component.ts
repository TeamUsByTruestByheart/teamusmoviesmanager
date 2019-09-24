import { PopularMovieModel } from './../../models/popularMovies.model';
import { TmdbService } from './../../shared/tmdb.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public list: Array<object> = [];
  public genre: Array<object> = [];
  public pageload = true;

  constructor(private api: TmdbService) {}

  ngOnInit() {
    this.showPopular();
  }

  showPopular(): void {
    this.api.getTrending().subscribe((data: Array<object>) => {
      this.list = data;
    });
  }
}
