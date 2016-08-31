import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-add-entry',
  templateUrl: 'add-entry.component.html',
  styleUrls: ['add-entry.component.css']
})
export class AddEntryComponent implements OnInit {

  entries = [];
  private AMOUNT_OF_ENTRIES = 10;

  constructor() { }

  ngOnInit() {
    for (let index = 0; index < this.AMOUNT_OF_ENTRIES; index++) {
      this.entries.push({
        index: index + 1,
        artist: '',
        song: '',
        score: this.AMOUNT_OF_ENTRIES - index
      });
    }
  }

}
