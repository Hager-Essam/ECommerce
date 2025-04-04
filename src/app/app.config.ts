import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {PreloadAllModules, provideRouter, withPreloading} from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {provideHttpClient ,withFetch} from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes,withPreloading(PreloadAllModules)),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideAnimationsAsync()]
};
