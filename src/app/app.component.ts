import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
  constructor(af: AngularFire) {

  }

  title = 'Top100';
}
