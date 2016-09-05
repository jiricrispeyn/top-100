import { Component, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import * as _ from 'lodash';
import { SpotifyService } from '../../shared';

@Component({
  moduleId: module.id,
  selector: 'app-add-entry',
  templateUrl: 'add-entry.component.html',
  styleUrls: ['add-entry.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class AddEntryComponent implements OnInit {

  addEntryForm: FormGroup;
  private previousSongs: any = [];
  private AMOUNT_OF_ENTRIES = 10;

  constructor(private fb: FormBuilder, private spotifyService: SpotifyService) { }

  ngOnInit() {

    this.addEntryForm = this.fb.group({
      songs: this.fb.array([])
    });

    this.addSongs(this.AMOUNT_OF_ENTRIES);

    this.previousSongs = this.addEntryForm.value.songs;

    this.addEntryForm.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .flatMap(res => {
        console.log(res.songs);
        console.log(this.previousSongs);

        _.map(res.songs, song => {
          console.log(song);
          return song;
        });

        return this.spotifyService.search(res, 'track');
      })
      .subscribe(res => console.log(res));
  }

  search(q, type) {
    this.spotifyService.search(q, type).subscribe(res => console.log(res));
  }

  private initSong(score) {
    return this.fb.group({
      song: ['', Validators.required],
      artist: ['', Validators.required],
      score: score
    });
  }

  private addSongs(amountOfEntries) {
    let score = this.AMOUNT_OF_ENTRIES;
    const control: any = this.addEntryForm.controls['songs'];

    for (var index = 0; index < this.AMOUNT_OF_ENTRIES; index++) {
      control.push(this.initSong(score--));
    }
  }

}
