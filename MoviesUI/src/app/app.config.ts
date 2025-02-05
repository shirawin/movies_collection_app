import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter ,Routes} from '@angular/router';

import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http'; 
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { SearchMoviesComponent } from './components/search-movies/search-movies.component';


const routes: Routes = [
  { path: '', component: SearchMoviesComponent }, // 🔹 דף הבית
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
};
