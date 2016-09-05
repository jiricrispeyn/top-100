import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

@Injectable()
export class SpotifyService {
  private spotifyUrl = 'https://api.spotify.com';

  constructor(private http: Http) { }

  search(q, type) {
    let search = new URLSearchParams();
    search.set('q', q);
    search.set('type', type);

    return this.http.get(`${this.spotifyUrl}/v1/search`, { search })
      .map(res => res.json());
  }

}
