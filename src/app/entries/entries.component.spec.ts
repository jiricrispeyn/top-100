/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { EntriesComponent } from './entries.component';

describe('Component: Entries', () => {
  it('should create an instance', () => {
    let component = new EntriesComponent();
    expect(component).toBeTruthy();
  });
});
