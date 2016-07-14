import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { HTTP_PROVIDERS } from '@angular/http';
import { appRouterProviders } from './app/app.routes';
import { FIREBASE_PROVIDERS, defaultFirebase, AngularFire } from 'angularfire2';
import { FirebaseConfig } from './app/config/firebase-config';

// var firebase_config = require('./config/firebase_config.json');

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
    appRouterProviders,
    HTTP_PROVIDERS,
    FIREBASE_PROVIDERS,
    defaultFirebase(FirebaseConfig)
]);

