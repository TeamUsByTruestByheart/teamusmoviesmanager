import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {
  public fallbackImage =
    'https://res.cloudinary.com/dkqqm2qwn/image/upload/v1566378272/blank-profile-picture-973460_960_720_jyfolk.png';
  public defaultCover = 'https://i.stack.imgur.com/jGlzr.png';
  public sideNav = false;
  constructor() {}

  ngOnInit() {}

  showNav = () => (this.sideNav = !this.sideNav);
}
