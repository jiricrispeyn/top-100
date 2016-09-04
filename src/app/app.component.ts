import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { SpotifyService } from './shared';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: ['SpotifyService'],
  directives: [ROUTER_DIRECTIVES, HTTP_PROVIDERS]
})
export class AppComponent {
  constructor(af: AngularFire) {

  }

  title = 'Top100';
}
