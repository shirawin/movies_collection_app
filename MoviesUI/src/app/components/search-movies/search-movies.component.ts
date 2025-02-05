import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService, Movie } from '../../services/movie.service';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip'; 
import { MatIconModule } from '@angular/material/icon'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FavoriteDialogComponent } from '../favorite-dialog/favorite-dialog.component'; 



@Component({
  selector: 'app-search-movies',
  standalone: true,
  imports: [CommonModule, FormsModule, MatTooltipModule,MatIconModule,MatFormFieldModule,MatSelectModule,MatInputModule, MatDialogModule],
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.scss']
})
export class SearchMoviesComponent {
  movies: Movie[] = [];
  originalMovies: Movie[] = [];
  searchQuery: string = '';
  selectedSort: string = 'none'; 
  favoriteMovies: Set<string> = new Set(); 

  constructor(private dialog: MatDialog, private movieService: MovieService) {
    this.loadFavorites();
  }

  searchMovies(): void {
    this.movieService.searchMovies(this.searchQuery).subscribe({
      next: (data) => {
        this.movies = [...data];
        this.originalMovies = [...data];
        this.sortMovies();
      },
      error: (err) => {
        console.error('Error fetching movies:', err);
      }
    });
  }

  clearSearch(): void {
    this.searchQuery = ''; 
  }

  openFavoritesDialog(): void {
    const favoriteMovies = this.getFavorites();
    this.dialog.open(FavoriteDialogComponent, {
      width: '400px',
      data: favoriteMovies
    });
  }  
  sortMovies(): void {
    if (this.selectedSort === 'none') {
      this.movies = [...this.originalMovies]; 
    } else if (this.selectedSort === 'title') {
      this.movies.sort((a, b) => a.title.localeCompare(b.title));
    } else if (this.selectedSort === 'year') {
      this.movies.sort((a, b) => parseInt(b.year) - parseInt(a.year));
    }
  }
  getFavorites(): Movie[] {
    const savedFavorites = localStorage.getItem('favoriteMovies');
    return savedFavorites ? JSON.parse(savedFavorites) as Movie[] : [];
  }
  toggleFavorite(movie: Movie): void {
    let favorites = this.getFavorites(); 
    const exists = favorites.some(fav => fav.imdbID === movie.imdbID);
  
    if (exists) {
      favorites = favorites.filter(fav => fav.imdbID !== movie.imdbID); 
    } else {
      favorites.push(movie);
    }
  
    localStorage.setItem('favoriteMovies', JSON.stringify(favorites)); 
  }
  isFavorite(movie: Movie): boolean {
    return this.getFavorites().some(fav => fav.imdbID === movie.imdbID);
  }
  

  saveFavorites(): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('favoriteMovies', JSON.stringify([...this.favoriteMovies]));
    }
  }
  
  loadFavorites(): void {
    if (typeof window !== 'undefined') {
      const savedFavorites = localStorage.getItem('favoriteMovies');
      if (savedFavorites) {
        this.favoriteMovies = new Set(JSON.parse(savedFavorites));
      }
    }
  }

}


