import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'Ghost-home',
  templateUrl: './ghost-home.component.html',
  styleUrls: ['./ghost-home.component.scss']
})
export class GhostHomeComponent implements OnInit {
  @Input() ghosts: any;
  constructor() { }

  ngOnInit() {
    console.log(this.ghosts);
  }

}
