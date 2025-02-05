import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable,switchMap  } from 'rxjs';

export interface Movie {
  title: string;
  year: string;
  poster: string;
  imdbID: string;
  genre: string;
}

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = 'https://localhost:7178/api/movies/search'; 
  private authUrl = 'https://localhost:7178/api/auth/login'; 


  constructor(private http: HttpClient) {}

  searchMovies(query: string = ''): Observable<Movie[]> {
    const token = localStorage.getItem('token');

    if (token) {
      const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
      return this.http.get<Movie[]>(`${this.apiUrl}?query=${query}`, { headers });
    } else {
      return this.http.post<{ token: string }>(this.authUrl, {
        username: 'admin',
        password: 'password'
      }).pipe(
        switchMap(response => {
          localStorage.setItem('token', response.token); 
          const headers = new HttpHeaders({ Authorization: `Bearer ${response.token}` });
          return this.http.get<Movie[]>(`${this.apiUrl}?query=${query}`, { headers });
        })
      );
    }
  }
}
