import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { PlaylistComponent } from './playlist';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [PlaylistComponent]
})
export class AppComponent {
  constructor(af: AngularFire) {

  }

  title = 'Top100';
}
