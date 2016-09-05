import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { AppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';
import { AppRoutes } from './app/app.routes';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  provideRouter(AppRoutes),
  disableDeprecatedForms(),
  provideForms(),
  FIREBASE_PROVIDERS,
  defaultFirebase({
    apiKey: 'AIzaSyCuB1APdu_P4Pxyb0S9Lw9RTb_vMwohBaA',
    authDomain: 'top-100-97d6e.firebaseapp.com',
    databaseURL: 'https://top-100-97d6e.firebaseio.com',
    storageBucket: 'top-100-97d6e.appspot.com'
  })
]);
