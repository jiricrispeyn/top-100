import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { SpotifyService } from './shared';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [HTTP_PROVIDERS, SpotifyService],
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
  constructor(af: AngularFire) {

  }

  title = 'Top100';
}
