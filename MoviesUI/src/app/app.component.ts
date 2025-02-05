

import { Component } from '@angular/core';
import { SearchMoviesComponent } from './components/search-movies/search-movies.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SearchMoviesComponent], // הוספת הרכיב לשימוש
  template: `
    <h1>Movies Search</h1>
    <app-search-movies></app-search-movies>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent { }
