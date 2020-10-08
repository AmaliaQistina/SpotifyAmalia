import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from '../app/nav-bar/nav-bar.component';
import { AboutComponent } from '../app/about/about.component';
import { SearchComponent } from './search/search.component';
import { SpotifyService } from './spotify.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AlbumBoxComponent } from './album-box/album-box.component';
import { ResultBoxComponent } from './result-box/result-box.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { ArtistComponent } from './artist/artist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutComponent,
    SearchComponent,
    AlbumBoxComponent,
    ResultBoxComponent,
    AlbumDetailsComponent,
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
