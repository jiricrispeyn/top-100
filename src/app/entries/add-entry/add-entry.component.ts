/// <reference path="../../../../typings/browser/ambient/underscore/index.d.ts" />
declare let _;

import { Component, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'app-add-entry',
  templateUrl: 'add-entry.component.html',
  styleUrls: ['add-entry.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class AddEntryComponent implements OnInit {

  entries: FirebaseListObservable<any[]>;
  addEntryForm: FormGroup;
  alert = false;
  private previousSongs: any = [];
  private AMOUNT_OF_ENTRIES = 10;

  constructor(private af: AngularFire, private fb: FormBuilder) { }

  ngOnInit() {
    this.entries = this.af.database.list('/entries');
    this.createForm();
  }

  // save songs and reset form
  save(form) {
    this.alert = true;
    setTimeout(() => this.alert = false, 3000);

    let songs = form.value.songs;

    songs.forEach(song => {
      this.entries.push({
        song: song.song,
        artist: song.artist,
        score: song.score
      });
    });

    this.createForm();
  }

  // create form with empty songs
  createForm() {
    this.addEntryForm = this.fb.group({
      songs: this.fb.array([])
    });

    this.addSongs(this.AMOUNT_OF_ENTRIES);
  }

  // initialize empty song
  private initSong(score) {
    return this.fb.group({
      song: ['', Validators.required],
      artist: ['', Validators.required],
      score: score
    });
  }

  // add amount of empty songs
  private addSongs(amountOfEntries) {
    let score = this.AMOUNT_OF_ENTRIES;
    const control: any = this.addEntryForm.controls['songs'];

    for (var index = 0; index < this.AMOUNT_OF_ENTRIES; index++) {
      control.push(this.initSong(score--));
    }
  }

}
