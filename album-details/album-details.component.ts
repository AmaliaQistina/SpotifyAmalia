import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SpotifyService} from '../spotify.service';
import {flatMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {
    id: string = null;
    albumDetails = null;
    tracksDetails = null;
    artist = null;
    @Input() musicData = null;
    @Output() viewMusicDetails = new EventEmitter();
  constructor(
      private route: ActivatedRoute,
      private spotifyService: SpotifyService,
  ) { }

  ngOnInit() {
      this.getAlbumId();
      this.getAlbum();
      this.getArtist();
  }

  getAlbumId() {
    this.id = this.route.snapshot.params.id;
  }

  getArtistId() {
    this.id = this.route.snapshot.params.id;
  }

  getArtist() {
    this.spotifyService
      .searchArtist(this.id)
      .pipe()
      .subscribe(res => {
        console.log(res);
        this.artist = res;
      });
  }

  getAlbum() {
    this.spotifyService.searchAlbumById(this.id)
        .pipe(
            flatMap(res => {
                this.albumDetails = res;
                return this.spotifyService.searchAlbumByIdTracks(this.id)
            }),
        )
        .subscribe(res => {
            this.tracksDetails = res;
        });
  }

    viewInSpotify(url: string) {
      window.open(url);
    }

    canDisplay() {
      return this.musicData !== null && typeof this.musicData !== "undefined";
    }

    viewDetails(data) {
      this.viewMusicDetails.emit(data);
    }

}