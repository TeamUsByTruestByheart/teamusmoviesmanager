import { IMovieDetail } from './../../__interfaces__/component.interface';
import { Component, OnInit, Input } from '@angular/core';
import { trigger } from '@angular/animations';
import { fadeIn } from '../../utils/animation';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  animations: [ trigger('fadeIn', fadeIn(':enter')) ],
})
export class MovieCardComponent implements OnInit {
  @Input() movieDetails: IMovieDetail;
  constructor() { }

  ngOnInit() {
  }

}
