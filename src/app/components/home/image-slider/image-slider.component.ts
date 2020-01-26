import { Component, OnInit, Input } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

interface ListOfMovies {
  id: number;
  poster_path: string;
  original_title: string;
  original_name: string;
  vote_average: string;
  release_date: string;
  first_air_date: string;
  overview: string;
}
@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {
  @Input() movielist: any;
  public imageArray: Array<object> = [];
  public currentImage: any;
  public previousImage: Array<string>;
  public initial: any = 0;
  public imageLooper;


  constructor() {
  }

  ngOnInit() {
    this.buildImageSlider(this.movielist);
  }

  buildImageSlider(listOfMovies: ListOfMovies[]) {
    listOfMovies.map((movie, index) => {
      if (index < 6) {
        this.imageArray = [...this.imageArray, {
          id: movie.id,
          poster_path: movie.poster_path,
          original_title: movie.original_title,
          original_name: movie.original_name,
          first_air_date: movie.first_air_date,
          release_date: movie.release_date,
          vote_average: movie.vote_average,
          overview: movie.overview
        }];
        this.currentImage = this.imageArray[0];
      }
    });
    const size = this.imageArray.length;
    this.imageLooper = setInterval(() => this.loopThroughImageArray(), 4000);
  }

  gotoMovie(index: number) {
    clearInterval(this.imageLooper);
    this.initial = index;
    this.currentImage = this.imageArray[this.initial];
    this.imageLooper = setInterval(() => this.loopThroughImageArray(), 4000);
  }

  loopThroughImageArray(): any {
    this.initial = this.initial + 1;
    if (this.initial >= this.imageArray.length) {
      this.initial = 0;
    }
    this.currentImage = this.imageArray[this.initial];
  }
}
