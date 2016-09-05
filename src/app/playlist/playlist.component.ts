import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'app-playlist',
  templateUrl: 'playlist.component.html',
  styleUrls: ['playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  entries: FirebaseListObservable<any[]>;
  playlist = [];

  constructor(private af: AngularFire) { }

  ngOnInit() {
    this.entries = this.af.database.list('/entries');

    this.entries.map(
      res => {
        // get unique entries from database
        let uniqueEntries = _.uniq(res, uniqueEntry => {
          return JSON.stringify(_.pick(uniqueEntry, ['song', 'artist']));
        });

        uniqueEntries = uniqueEntries.map(uniqueEntry => {
          // get all entries related to unique entry
          let relatedEntries = res.filter((relatedEntry: any) => {
            return uniqueEntry.song === relatedEntry.song && uniqueEntry.artist === relatedEntry.artist;
          });

          return _.extend({}, uniqueEntry, {
            // replace score with score count of related entries
            score: _.reduce(relatedEntries, (memo, num: any) => {
              return memo + num.score;
            }, 0)
          });
        });

        // sort asc by score
        return uniqueEntries.sort((a, b) => b.score - a.score);
      }
    ).subscribe(
      res => {
        // only show first 100 entries
        this.playlist = res.slice(0, 100);
    });
  }

}
