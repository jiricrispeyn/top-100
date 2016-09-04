import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SpotifyService {
  private spotifyUrl = 'https://api.spotify.com';

  constructor(private http: Http) { }

  search() {
    this.http.get(`%{this.spotifyUrl}/v1/search`)
      .map(res => res.json());
  }

}
