/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { SpotifyService } from './spotify.service';

describe('Service: Spotify', () => {
  beforeEach(() => {
    addProviders([SpotifyService]);
  });

  it('should ...',
    inject([SpotifyService],
      (service: SpotifyService) => {
        expect(service).toBeTruthy();
      }));
});
