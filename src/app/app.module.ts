import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { BrowseComponent } from './components/browse/browse.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ImageSliderComponent } from './components/home/image-slider/image-slider.component';
import { TvDetailComponent } from './components/tv-detail/tv-detail.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieCardComponent } from './components/reusable/movie-card/movie-card.component';
import { PaginationControlsComponent } from './components/reusable/pagination-controls/pagination-controls.component';
import { TmAniDefaultComponent } from './components/reusable/animation/tm-ani-default/tm-ani-default.component';
import { GhostHomeComponent } from './components/reusable/skeleton/ghost-home/ghost-home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    AboutComponent,
    SearchComponent,
    BrowseComponent,
    ContactMeComponent,
    PagenotfoundComponent,
    ImageSliderComponent,
    TvDetailComponent,
    MovieDetailComponent,
    MovieCardComponent,
    PaginationControlsComponent,
    TmAniDefaultComponent,
    GhostHomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
