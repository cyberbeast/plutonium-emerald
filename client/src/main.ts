import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { HTTP_PROVIDERS } from '@angular/http';
import { appRouterProviders } from './app/app.routes';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
    appRouterProviders,
    HTTP_PROVIDERS,
    FIREBASE_PROVIDERS,
    defaultFirebase({
      apiKey: "<your-key>",
      authDomain: "<your-project-authdomain>",
      databaseURL: "<your-database-URL>",
      storageBucket: "<your-storage-bucket>",
  })
]);

