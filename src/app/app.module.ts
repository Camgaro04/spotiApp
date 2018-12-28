import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { SearchComponent } from './component/search/search.component';
import { ArtistComponent } from './component/artist/artist.component';
import { NavbarComponent } from './component/share/navbar/navbar.component';

import { SpotifyService } from "./services/spotify.service";

import { Router, RouterModule } from "@angular/router";
import { ROUTES } from './app.routes';
import { NoimagePipe } from './pipes/noimage.pipe';
import { CardsComponent } from './component/cards/cards.component';
import { LoadingComponent } from './components/shared/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    NoimagePipe,
    CardsComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES,{useHash:true}),
    AppRoutingModule

  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
