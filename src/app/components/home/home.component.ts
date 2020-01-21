import { PopularMovieModel } from './../../models/popularMovies.model';
import { TmdbService } from './../../shared/tmdb.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public movielist: Array<object> = [];
  public genre: Array<object> = [];
  public pageload = true;
  single: object;
  page = 1;

  constructor(private api: TmdbService) { }

  ngOnInit() {
    this.showPopular(1);
  }

  showPopular(page: number): void {
    this.api.getTrending(page).subscribe((data: Array<object>) => {
      this.movielist = data;
      this.pageload = false;
      this.single = this.movielist[0];
    });
  }

  pageChanged(page) {
    this.pageload = true;
    this.showPopular(page);
  }
}
