import { RouterConfig } from '@angular/router';

import { PlaylistComponent } from './playlist/playlist.component';
import { EntriesComponent } from './entries/entries.component';
import { AddEntryComponent } from './entries/add-entry/add-entry.component';

export const AppRoutes: RouterConfig = [
  { path: 'playlist', component: PlaylistComponent },
  { path: 'entries', component: EntriesComponent },
  { path: 'entries/add', component: AddEntryComponent },
  { path: '', redirectTo: 'playlist', pathMatch: 'full' }
]